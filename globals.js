var React = require('react-native');
var SQLite = require('react-native-sqlite-storage');

class Globals{
  //=======Common constants==================
  static ScrTraCuu = 'TRA CỨU';
  static ScrChiTietBenh = 'CHI TIẾT BỆNH';
  static ScrChanBenh = 'CHẨN BỆNH';
  static ScrChanBenhKetQua = 'KẾT QUẢ';
  static ScrMeoVat = 'MẸO VẶT';
  static ScrMeoVatChiTiet = 'CHI TIẾT MẸO VẶT';

  static DetectStringFormat(){
    // First, checks if it isn't implemented yet.
    if (!String.prototype.format) {
      String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) { 
          return typeof args[number] != 'undefined'
            ? args[number]
            : match
          ;
        });
      };
    }
  }


  //=======START Sqlite3==================
  static db = null;
  static dbName = 'MyDB.db';

  static openDB(){
    this.db = SQLite.openDatabase(
      {name : this.dbName, createFromLocation: '~ReactDB.db'}, 
      () => {console.log('====Success open database')},
      () => {console.log('====Error open database')});
    return this.db;
  }

  static closeDB(){
    this.db.close();
  }

  static removeDB(){
    SQLite.deleteDatabase({name: this.dbName}, () => {console.log('REMOVE DB')}, (err) => {console.log(err.message)});
  }
  //=======END Sqlite3==================
}

module.exports = Globals;