"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("@syncfusion/ej2-base/e2e/index");
var DateTimePickerHelper_1 = require("./Helper/DateTimePickerHelper");
var helper = new DateTimePickerHelper_1.Helper();
var themes = ["material"];
describe('DateTimePicker', function () {
    var _loop_1 = function (i) {
        var fileName = 'https://cdn.syncfusion.com/ej2/ej2-calendars/styles/' + themes[i] + '.css';
        it('DateTimePicker_RTL_Floatlabel_never', function (done) {
            index_1.browser.get(index_1.browser.basePath + '/demos/dateTimePicker/index.html');
            var path = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            var bgColor = "document.body.setAttribute('style', 'background-color: black')";
            index_1.browser.executeScript(bgColor);
            index_1.browser.executeScript(path).then(function () {
                index_1.element(helper.rtl_Id).click();
                index_1.element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + index_1.Key.ENTER);
                index_1.element(helper.dateIcon_className).click();
                index_1.browser.sleep(2000);
                index_1.browser.compareScreen(index_1.element(index_1.By.className('content-wrapper')), 'DateTimepicker_rtl_float_never_input_' + themes[i]);
                index_1.element(helper.clearIcon_ClassName).click();
                index_1.browser.sleep(2000);
                index_1.browser.compareScreen(index_1.element(index_1.By.className('content-wrapper')), 'DateTimepicker_rtl_flolat_neverClear_input_' + themes[i]);
                index_1.element(helper.focusOut_Id).click();
                index_1.browser.sleep(2000);
                index_1.browser.compareScreen(index_1.element(index_1.By.className('content-wrapper')), 'DateTimepicker_rtl_float_neverFocusOut_input_' + themes[i]);
                done();
            });
        });
        it('DateTimePicker_RTL_Floatlabel_auto', function (done) {
            index_1.browser.get(index_1.browser.basePath + '/demos/dateTimePicker/index.html');
            var path = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            var bgColor = "document.body.setAttribute('style', 'background-color: black')";
            index_1.browser.executeScript(bgColor);
            index_1.browser.executeScript(path).then(function () {
                index_1.element(helper.rtl_Id).click();
                index_1.element(helper.floatLabel_Id).sendKeys(index_1.Key.ARROW_DOWN);
                index_1.element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + index_1.Key.ENTER);
                index_1.element(helper.dateIcon_className).click();
                index_1.browser.sleep(2000);
                index_1.browser.compareScreen(index_1.element(index_1.By.className('content-wrapper')), 'DateTimepicker_rtl_float_auto_input_' + themes[i]);
                index_1.element(helper.clearIcon_ClassName).click();
                index_1.browser.sleep(2000);
                index_1.browser.compareScreen(index_1.element(index_1.By.className('content-wrapper')), 'DateTimepicker_rtl_flolat_autoClear_input_' + themes[i]);
                index_1.element(helper.focusOut_Id).click();
                index_1.browser.sleep(2000);
                index_1.browser.compareScreen(index_1.element(index_1.By.className('content-wrapper')), 'DateTimepicker_rtl_float_autoFocusOut_input_' + themes[i]);
                done();
            });
        });
        it('DateTimePicker_RTL_Floatlabel_always', function (done) {
            index_1.browser.get(index_1.browser.basePath + '/demos/dateTimePicker/index.html');
            var path = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            var bgColor = "document.body.setAttribute('style', 'background-color: black')";
            index_1.browser.executeScript(bgColor);
            index_1.browser.executeScript(path).then(function () {
                index_1.element(helper.rtl_Id).click();
                index_1.element(helper.floatLabel_Id).sendKeys(index_1.Key.ARROW_DOWN);
                index_1.element(helper.floatLabel_Id).sendKeys(index_1.Key.ARROW_DOWN);
                index_1.element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + index_1.Key.ENTER);
                index_1.element(helper.dateIcon_className).click();
                index_1.browser.sleep(2000);
                index_1.browser.compareScreen(index_1.element(index_1.By.className('content-wrapper')), 'DateTimepicker_rtl_float_always_input_' + themes[i]);
                index_1.element(helper.clearIcon_ClassName).click();
                index_1.browser.sleep(2000);
                index_1.browser.compareScreen(index_1.element(index_1.By.className('content-wrapper')), 'DateTimepicker_rtl_flolat_alwaysClear_input_' + themes[i]);
                index_1.element(helper.focusOut_Id).click();
                index_1.browser.sleep(2000);
                index_1.browser.compareScreen(index_1.element(index_1.By.className('content-wrapper')), 'DateTimepicker_rtl_float_alwaysFocusOut_input_' + themes[i]);
                done();
            });
        });
        it('DateTimePicker_RTL_Floatlabel_never', function (done) {
            index_1.browser.get(index_1.browser.basePath + '/demos/dateTimePicker/index.html');
            var path = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            var bgColor = "document.body.setAttribute('style', 'background-color: black')";
            index_1.browser.executeScript(bgColor);
            index_1.browser.executeScript(path).then(function () {
                index_1.element(helper.clear_Id).click();
                index_1.element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + index_1.Key.ENTER);
                index_1.element(helper.dateIcon_className).click();
                index_1.browser.sleep(2000);
                index_1.browser.compareScreen(index_1.element(index_1.By.className('content-wrapper')), 'DateTimepicker_clear_float_never_input_' + themes[i]);
                done();
            });
        });
        it('DateTimePicker_RTL_Floatlabel_auto', function (done) {
            index_1.browser.get(index_1.browser.basePath + '/demos/dateTimePicker/index.html');
            var path = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            var bgColor = "document.body.setAttribute('style', 'background-color: black')";
            index_1.browser.executeScript(bgColor);
            index_1.browser.executeScript(path).then(function () {
                index_1.element(helper.rtl_Id).click();
                index_1.element(helper.floatLabel_Id).sendKeys(index_1.Key.ARROW_DOWN);
                index_1.element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + index_1.Key.ENTER);
                index_1.element(helper.dateIcon_className).click();
                index_1.browser.sleep(2000);
                index_1.browser.compareScreen(index_1.element(index_1.By.className('content-wrapper')), 'DateTimepicker_clear_float_auto_input_' + themes[i]);
                done();
            });
        });
        it('DateTimePicker_RTL_Floatlabel_always', function (done) {
            index_1.browser.get(index_1.browser.basePath + '/demos/dateTimePicker/index.html');
            var path = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            var bgColor = "document.body.setAttribute('style', 'background-color: black')";
            index_1.browser.executeScript(bgColor);
            index_1.browser.executeScript(path).then(function () {
                index_1.element(helper.rtl_Id).click();
                index_1.element(helper.floatLabel_Id).sendKeys(index_1.Key.ARROW_DOWN);
                index_1.element(helper.floatLabel_Id).sendKeys(index_1.Key.ARROW_DOWN);
                index_1.element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + index_1.Key.ENTER);
                index_1.element(helper.dateIcon_className).click();
                index_1.browser.sleep(2000);
                index_1.browser.compareScreen(index_1.element(index_1.By.className('content-wrapper')), 'DateTimepicker_clear_float_always_input_' + themes[i]);
                done();
            });
        });
    };
    for (var i = 0; i < themes.length; i++) {
        _loop_1(i);
    }
});
