/**
 * Copyright (c) 2022 Asial Corporation. All rights reserved.
 */
 const monaca = function () {};
const BarcodeScanner = function () {};

BarcodeScanner.prototype.scan = function(success, fail) {
  cordova.exec(success, fail, "MonacaBarcodeScannerPlugin", "scan", []);
};

monaca.BarcodeScanner = new BarcodeScanner();
module.exports = monaca.BarcodeScanner;
