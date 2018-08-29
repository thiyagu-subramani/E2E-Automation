import { browser, element, Key, By, by, protractor } from "@syncfusion/ej2-base/e2e/index";
import { Helper } from "./Helper/DatePickerHelper";
import { Property, queryParams } from "@syncfusion/ej2-base";

var helper: Helper = new Helper();

//var event = new Event('change');
let themes: String[] = ["material", "fabric", "bootstrap", "highcontrast"];
describe('DatePicker', function () {
    for (let i = 0; i < themes.length; i++) {
        let fileName: string = 'https://cdn.syncfusion.com/ej2/ej2-calendars/styles/' + themes[i] + '.css';
        it('Default DatePicker', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_default_' + themes[i]);
                done();
            });
        });
        it('DatePicker with RTL', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl_' + themes[i]);
                done();
            });
        });
        it('DatePicker with RTL and TodayButton', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.today_Id).click();
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with Today_' + themes[i]);
                done();
            });
        });
        it('DatePicker with RTL and week', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.week_Id).click();
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with Week_' + themes[i]);
                done();
            });
        });
        it('DatePicker with RTL and disable', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.enable_Id).click();
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with disable_' + themes[i]);
                done();
            });
        });
        it('DatePicker with RTL and clearButton', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.clear_Id).click();
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with clear_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and readonly', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.read_Id).click();
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with readonly_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_Rtl_readonly_show', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.read_Id).click();
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                element(helper.show_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl_readonly_show_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_Rtl_readonly_focus', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.read_Id).click();
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                element(helper.focusIn_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl_readonly_focus_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Start_Year', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with start_year_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Start_Decade', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with start_decade_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Firstday', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with firstday_2_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Firstday', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with firstday_3_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Firstday', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with firstday_4_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Firstday', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with firstday_5_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Firstday', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with firstday_6_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Firstday', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.floatLabel_Id).sendKeys("16" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with firstday_6_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Floatlabel', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with floatLabel_never_' + themes[i]);
                element(helper.clearIcon_ClassName).click();
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with floatLabel_never_icon_' + themes[i]);
                element(helper.focusOut_Id).click();
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with floatLabel_never_focusOut_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Floatlabel', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with floatLabel_auto_' + themes[i]);
                element(helper.clearIcon_ClassName).click();
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with floatLabel_auto_icon_' + themes[i]);
                element(helper.focusOut_Id).click();
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with floatLabel_auto_focusOut_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Floatlabel', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with floatLabel_always_' + themes[i]);
                element(helper.clearIcon_ClassName).click();
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with floatLabel_always_icon_' + themes[i]);
                element(helper.focusOut_Id).click();
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with floatLabel_always_focusOut_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Format', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with format_dd_MMM_yy_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Format', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with format_yy_MMMM_dd_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Format', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with format_dd_MMMM_' + themes[i]);
                done();
            });
        });


        it('DatePicker with RTL and Min', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2039" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with min_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with min_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Min_value*', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with min_High_value_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with min_High_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with min_equal_value_' + themes[i]);
                done();
            });
        });


        it('DatePicker with RTL and Max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with max_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with max_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Max_value*', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with max_High_low_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with max_low_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with max_equal_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and min_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with_min_max_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and min_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/12/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with_min_max_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and min_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with_min_max_same_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and min_max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with_min_max_value_same_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and min_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/12/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with_min_high_max_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and width', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.width_Id).clear();
                element(helper.width_Id).sendKeys("450" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with_width_input_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and width', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.width_Id).clear();
                element(helper.width_Id).sendKeys("450" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with_width_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Strictmode', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.strict_Id).click();
                element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with_strictmode_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with_strictmode_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and strictmode', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.strict_Id).click();
                element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with_strictmode2_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with_strictmode2_' + themes[i]);
                done();
            });
        });


        it('DatePicker with RTL and Max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.max_Id).clear();
                element(helper.strict_Id).click();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with max_High_low__strict_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with max_low_value_strict_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.min_Id).clear();
                element(helper.strict_Id).click();
                element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with min_High_value_input_strict_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with min_High_value_strict_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and Placeholder', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.placeholder_Id).clear();
                element(helper.placeholder_Id).sendKeys("Select your Date of Birth" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with placeholder_' + themes[i]);
                done();
            });
        });
        it('DatePicker with RTL and show', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                element(helper.show_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with show_' + themes[i]);
                done();
            });
        });
        it('DatePicker with RTL and focusIn', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.focusIn_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl_with_focusIn_' + themes[i]);
                done();
            });
        });
        it('DatePicker with RTL and value_focusIn', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                element(helper.focusIn_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl_with_focusIn_' + themes[i]);
                done();
            });
        });

        it('DatePicker with RTL and focusOut', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.focusIn_Id).click();
                element(helper.focusOut_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl_with_focusIn_' + themes[i]);
                done();
            });
        });

        it('DatePicker with TodayButton', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_' + themes[i]);
                done();
            });
        });

        it('DatePicker with TodayButton_week', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.week_Id).click();
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_week_' + themes[i]);
                done();
            });
        });

        it('DatePicker with Today and Firstday', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with firstday_2_' + themes[i]);
                done();
            });
        });

        it('DatePicker with Today and Firstday', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with firstday_3_' + themes[i]);
                done();
            });
        });

        it('DatePicker with Today and Firstday', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with firstday_4_' + themes[i]);
                done();
            });
        });

        it('DatePicker with Today and Firstday', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with firstday_5_' + themes[i]);
                done();
            });
        });

        it('DatePicker with Today and Firstday', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with firstday_6_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and Format', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with format_dd_MMM_yy_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and Format', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with format_yy_MMMM_dd_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and Format', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with format_dd_MMMM_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and Min', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2039" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with min_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and Min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_min_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and Min_value*', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_min_High_value_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with min_High_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and Min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with min_equal_value_' + themes[i]);
                done();
            });
        });


        it('DatePicker with today and Max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with max_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and Max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_ with max_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and Max_value*', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with max_High_low_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with max_low_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and Max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with max_equal_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and min_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with_min_max_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and min_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/12/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with_min_max_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and min_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with_min_max_same_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and min_max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with_min_max_value_same_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and min_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/12/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today_with_min_high_max_' + themes[i]);
                done();
            });
        });
        it('DatePicker with today and Strictmode', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.strict_Id).click();
                element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today with_strictmode_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today with_strictmode_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and strictmode', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.strict_Id).click();
                element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today with_strictmode2_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today with_strictmode2_' + themes[i]);
                done();
            });
        });


        it('DatePicker with today and Max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.max_Id).clear();
                element(helper.strict_Id).click();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today with max_High_low__strict_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today with max_low_value_strict_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and Min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.min_Id).clear();
                element(helper.strict_Id).click();
                element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today with min_High_value_input_strict_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_today with min_High_value_strict_' + themes[i]);
                done();
            });
        });
        it('DatePicker with today and width', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.width_Id).clear();
                element(helper.width_Id).sendKeys("450" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_toady_with_width_' + themes[i]);
                done();
            });
        });
        it('DatePicker with today and show', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                element(helper.show_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_taday_with show_' + themes[i]);
                done();
            });
        });

        // WeekNumber

        it('DatePicker with weekNumber and Firstday', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with firstday_2_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and Firstday', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with firstday_3_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and Firstday', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with firstday_4_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and Firstday', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with firstday_5_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and Firstday', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with firstday_6_' + themes[i]);
                done();
            });
        });
        it('DatePicker with weekNumber and Format', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with format_dd_MMM_yy_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and Format', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with format_yy_MMMM_dd_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and Format', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with format_dd_MMMM_' + themes[i]);
                done();
            });
        });
        it('DatePicker with weekNumber and Min', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2039" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with min_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and Min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_min_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and Min_value*', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_min_High_value_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with min_High_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and Min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with min_equal_value_' + themes[i]);
                done();
            });
        });


        it('DatePicker with weekNumber and Max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with max_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and Max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_ with max_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and Max_value*', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with max_High_low_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with max_low_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and Max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with max_equal_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and min_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with_min_max_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and min_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/12/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with_min_max_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and min_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with_min_max_same_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and min_max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with_min_max_value_same_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and min_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/12/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with_min_high_max_' + themes[i]);
                done();
            });
        });
        it('DatePicker with weekNumber and Strictmode', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.strict_Id).click();
                element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with_strictmode_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with_strictmode_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and strictmode', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.strict_Id).click();
                element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with_strictmode2_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with_strictmode2_' + themes[i]);
                done();
            });
        });


        it('DatePicker with weekNumber and Max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.max_Id).clear();
                element(helper.strict_Id).click();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with max_High_low__strict_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with max_low_value_strict_' + themes[i]);
                done();
            });
        });

        it('DatePicker with weekNumber and Min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.min_Id).clear();
                element(helper.strict_Id).click();
                element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with min_High_value_input_strict_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with min_High_value_strict_' + themes[i]);
                done();
            });
        });
        it('DatePicker with weekNumber and width', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.width_Id).clear();
                element(helper.width_Id).sendKeys("450" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with_width_' + themes[i]);
                done();
            });
        });
        it('DatePicker with weekNumber and show', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                element(helper.show_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_week_with show_' + themes[i]);
                done();
            });
        });
        it('DatePicker with disable', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.enable_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_disable_' + themes[i]);
                done();
            });
        });

        it('DatePicker with disable with value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.enable_Id).click();
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_disable_with_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with disable with show', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.enable_Id).click();
                element(helper.show_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_disable_with_show_' + themes[i]);
                done();
            });
        });

        it('DatePicker with disable with focus', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.focusIn_Id).click();
                element(helper.show_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_disable_with_focus_' + themes[i]);
                done();
            });
        });

        it('DatePicker with clearButton', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.clear_Id).click();
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with clear_' + themes[i]);
                done();
            });
        });

        it('DatePicker with clearButton_focus', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.clear_Id).click();
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.focusIn_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with clear_' + themes[i]);
                done();
            });
        });

        it('DatePicker with Strictmode', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.strict_Id).click();
                element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_strictmode_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_strictmode_' + themes[i]);
                done();
            });
        });
        it('DatePicker with strictmode', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.strict_Id).click();
                element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker__strictmode2_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker__strictmode2_' + themes[i]);
                done();
            });
        });

        it('DatePicker with today and Max_value_strict', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.strict_Id).click();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_max_High_low__strict_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_ max_low_value_strict_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_Min_value_strict', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.strict_Id).click();
                element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_min_High_value_input_strict_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_min_High_value_strict_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_readonly', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.read_Id).click();
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_readonly_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_readonly_show', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.read_Id).click();
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                element(helper.show_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_readonly_show_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_readonly_focus', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.read_Id).click();
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                element(helper.focusIn_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_readonly_focus_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_Start_Year_rtl', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.rtl_Id).click();
                element(helper.value_Id).sendKeys("2/12/2017" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker with_Start_Year_rtl_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_Start_Year_today', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.today_Id).click();
                element(helper.value_Id).sendKeys("2/12/2017" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker with_Start_Year_today_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_Start_Year_clear', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.clear_Id).click();
                element(helper.value_Id).sendKeys("2/12/2017" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker with_Start_Year_clear_' + themes[i]);
                done();
            });
        });

        // min max 

        it('DatePicker with_start_year_Min', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("5/2/2039" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with min_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_start_year_min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("4/2/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("8/22/2039" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_start_year_min_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_start_year_Min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("5/22/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_year_min_High_value_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_year_min_High_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_start_year_min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("5/12/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/22/2039" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with min_equal_value_' + themes[i]);
                done();
            });
        });


        it('DatePicker with_start_year_Max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with max_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_start_year_Max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("12/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_year_max_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_start_year_Max_value*', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("12/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("3/28/2013" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_year_max_High_low_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_year_max_low_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_start_year_Max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("5/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_year_max_equal_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_start_year_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'with_start_year_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_start_year_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'with_start_year_value_' + themes[i]);
                done();
            });
        });

        it('Datepicker_start_year_with_min_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("10/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_year_with_min_max_' + themes[i]);
                done();
            });
        });

        it('Datepicker_start_year_with_min_max_value_same', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("5/2/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("5/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/12/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_year_with_min_max_value_same_' + themes[i]);
                done();
            });
        });

        it('Datepicker_start_year_with_min_max_same', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("4/22/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("4/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_year_with_min_max_same_' + themes[i]);
                done();
            });
        });

        it('Datepicker_start_year_with_min_high_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("5/22/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/12/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_year_with_min_high_max_' + themes[i]);
                done();
            });
        });

        it('DatePicker_with_start_year_and_width', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.width_Id).clear();
                element(helper.width_Id).sendKeys("450" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker_with_start_year_and_width_' + themes[i]);
                done();
            });
        });

        it('DatePicker_start_year_Strictmode', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.strict_Id).click();
                element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'DatePicker_start_year_Strictmode_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker_start_year_Strictmode_' + themes[i]);
                done();
            });
        });

        it('DatePicker_start_year_Strictmode', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.strict_Id).click();
                element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'DatePicker_start_year_Strictmode2_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker_start_year_Strictmode2_' + themes[i]);
                done();
            });
        });


        it('DatePicker_start_year_Max_value_strict', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.max_Id).clear();
                element(helper.strict_Id).click();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("3/28/2014" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'DatePicker_start_year_Max_value_strict_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker_start_year_Max_value_strict_' + themes[i]);
                done();
            });
        });

        it('DatePicker_start_year_Min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.min_Id).clear();
                element(helper.strict_Id).click();
                element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("12/12/2032" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'DatePicker_start_year_min_High_value_input_strict_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker_start_year_min_High_value_strict_' + themes[i]);
                done();
            });
        });
        it('DatePicker_start_year_and_show', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                element(helper.show_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker_start_year_and_show_' + themes[i]);
                done();
            });
        });



        // start_depth 

        it('DatePicker with_start_decade_rtl', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.rtl_Id).click();
                element(helper.value_Id).sendKeys("2/12/2017" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker with_start_decade_rtl_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_start_decade_today', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.today_Id).click();
                element(helper.value_Id).sendKeys("2/12/2017" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker with_start_decade_today_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_start_decade_clear', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.clear_Id).click();
                element(helper.value_Id).sendKeys("2/12/2017" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker with_start_decade_clear_' + themes[i]);
                done();
            });
        });

        // min max 

        it('DatePicker with_start_decade_Min', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("5/2/2035" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker with_start_decade_Min_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_start_decade_min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("4/2/2035" + Key.ENTER);
                element(helper.value_Id).sendKeys("8/22/2039" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_start_decade_min_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_start_decade_Min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("5/22/2045" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/12/2035" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_decade_min_High_value_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_decade_min_High_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_start_decade_min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("5/12/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/22/2039" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with min_equal_value_' + themes[i]);
                done();
            });
        });


        it('DatePicker with_start_decade_Max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with max_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_start_decade_Max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("12/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/2/2008" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_decade_max_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_start_decade_Max_value*', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("12/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("3/28/2018" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_decade_max_High_low_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_decade_max_low_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_start_decade_Max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("5/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_decade_max_equal_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_start_decade_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'with_start_decade_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker with_start_decade_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'with_start_decade_value_' + themes[i]);
                done();
            });
        });

        it('Datepicker_start_decade_with_min_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("10/22/2016" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_decade_with_min_max_' + themes[i]);
                done();
            });
        });

        it('Datepicker_start_decade_with_min_max_value_same', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("5/2/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("5/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/12/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_decade_with_min_max_value_same_' + themes[i]);
                done();
            });
        });

        it('Datepicker_start_decade_with_min_max_same', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("4/22/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("4/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_decade_with_min_max_same_' + themes[i]);
                done();
            });
        });

        it('Datepicker_start_decade_with_min_high_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("5/22/2016" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/12/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_start_decade_with_min_high_max_' + themes[i]);
                done();
            });
        });

        it('DatePicker_with_start_decade_and_width', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.width_Id).clear();
                element(helper.width_Id).sendKeys("450" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker_with_start_decade_and_width_' + themes[i]);
                done();
            });
        });

        it('DatePicker_start_decade_Strictmode', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.strict_Id).click();
                element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'DatePicker_start_decade_Strictmode_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker_start_decade_Strictmode_' + themes[i]);
                done();
            });
        });

        it('DatePicker_start_decade_Strictmode', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.strict_Id).click();
                element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'DatePicker_start_decade_Strictmode2_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker_start_decade_Strictmode2_' + themes[i]);
                done();
            });
        });


        it('DatePicker_start_decade_Max_value_strict', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.max_Id).clear();
                element(helper.strict_Id).click();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("3/28/2018" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'DatePicker_start_decade_Max_value_strict_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker_start_decade_Max_value_strict_' + themes[i]);
                done();
            });
        });

        it('DatePicker_start_decade_Min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.min_Id).clear();
                element(helper.strict_Id).click();
                element(helper.min_Id).sendKeys("2/22/2035" + Key.ENTER);
                element(helper.value_Id).sendKeys("12/12/2025" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'DatePicker_start_decade_min_High_value_input_strict_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker_start_decade_min_High_value_strict_' + themes[i]);
                done();
            });
        });
        it('DatePicker_start_decade_and_show', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                element(helper.show_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker_start_decade_and_show_' + themes[i]);
                done();
            });
        });

        it('DatePicker firstday_Min', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2039" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with min_' + themes[i]);
                done();
            });
        });
        it('DatePicker firstday_Max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with max_' + themes[i]);
                done();
            });
        });

        it('DatePicker firstday_min_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with_min_max_' + themes[i]);
                done();
            });
        });

        it('DatePicker firstday_min_max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/12/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_Rtl with_min_max_' + themes[i]);
                done();
            });
        });
        it('DatePicker_with_Floatlabel', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_floatLabel_never_' + themes[i]);
                element(helper.clearIcon_ClassName).click();
                browser.compareScreen(element(By.id('content')), 'Datepicker_floatLabel_never_icon_' + themes[i]);
                element(helper.focusOut_Id).click();
                browser.compareScreen(element(By.id('content')), 'Datepicker_floatLabel_never_focusOut_' + themes[i]);
                done();
            });
        });

        it('DatePicker_with_Floatlabel', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_floatLabel_auto_' + themes[i]);
                element(helper.clearIcon_ClassName).click();
                browser.compareScreen(element(By.id('content')), 'Datepicker_floatLabel_auto_icon_' + themes[i]);
                element(helper.focusOut_Id).click();
                browser.compareScreen(element(By.id('content')), 'Datepicker_floatLabel_auto_focusOut_' + themes[i]);
                done();
            });
        });

        it('DatePicker_with_Floatlabel', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_floatLabel_always_' + themes[i]);
                element(helper.clearIcon_ClassName).click();
                browser.compareScreen(element(By.id('content')), 'Datepicker_floatLabel_always_icon_' + themes[i]);
                element(helper.focusOut_Id).click();
                browser.compareScreen(element(By.id('content')), 'Datepicker_floatLabel_always_focusOut_' + themes[i]);
                done();
            });
        });
        it('DatePicker_with_Format', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker_with_Format_dd_MMM_yy_' + themes[i]);
                done();
            });
        });

        it('DatePicker_with_Format', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker_with_Format_yy_MMMM_dd_' + themes[i]);
                done();
            });
        });

        it('DatePicker_with_Format', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker_with_Formatt_dd_MMMM_' + themes[i]);
                done();
            });
        });

        it('DatePicker_Min', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2039" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker_Min_' + themes[i]);
                done();
            });
        });

        it('DatePicker_Min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'DatePicker_Min_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker_Min_value*', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_min_High_value_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_min_High_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker_Min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_min_equal_value_' + themes[i]);
                done();
            });
        });


        it('DatePicker_Max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_max_' + themes[i]);
                done();
            });
        });

        it('DatePicker_Max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_max_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker_Max_value*', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_max_High_low_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_max_low_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker_Max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_max_equal_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker_min_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_min_max_' + themes[i]);
                done();
            });
        });

        it('DatePicker_min_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/12/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_min_max_value_' + themes[i]);
                done();
            });
        });

        it('DatePicker_min_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_min_max_same_' + themes[i]);
                done();
            });
        });

        it('DatePicker_min_max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_min_max_value_same_' + themes[i]);
                done();
            });
        });

        it('DatePicker_min_max', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.max_Id).clear();
                element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.max_Id).sendKeys("2/12/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_min_high_max_' + themes[i]);
                done();
            });
        });

        it('DatePicker_width', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.width_Id).clear();
                element(helper.width_Id).sendKeys("450" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_width_input_' + themes[i]);
                done();
            });
        });

        it('DatePicker_width', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.width_Id).clear();
                element(helper.width_Id).sendKeys("450" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_width_' + themes[i]);
                done();
            });
        });

        it('DatePicker_Strictmode', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.strict_Id).click();
                element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_strictmode_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_strictmode_' + themes[i]);
                done();
            });
        });

        it('DatePicker_strictmode', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.strict_Id).click();
                element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_strictmode2_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_strictmode2_' + themes[i]);
                done();
            });
        });


        it('DatePicker_Max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.strict_Id).click();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with max_High_low__strict_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with max_low_value_strict_' + themes[i]);
                done();
            });
        });

        it('DatePicker_Min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.strict_Id).click();
                element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with min_High_value_input_strict_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with min_High_value_strict_' + themes[i]);
                done();
            });
        });
        it('DatePicker_width', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.width_Id).clear();
                element(helper.width_Id).sendKeys("450" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_width_input_' + themes[i]);
                done();
            });
        });

        it('DatePicker_width', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.width_Id).clear();
                element(helper.width_Id).sendKeys("450" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_width_' + themes[i]);
                done();
            });
        });

        it('DatePicker_Strictmode', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.strict_Id).click();
                element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_strictmode_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_strictmode_' + themes[i]);
                done();
            });
        });

        it('DatePicker_strictmode', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.strict_Id).click();
                element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_strictmode2_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_strictmode2_' + themes[i]);
                done();
            });
        });


        it('DatePicker_Max_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.strict_Id).click();
                element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
                element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_max_High_low__strict_input_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with max_low_value_strict_' + themes[i]);
                done();
            });
        });

        it('DatePicker_Min_value', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.strict_Id).click();
                element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with min_High_value_input_strict_' + themes[i]);
                element(helper.pickerIcon_Classname).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with min_High_value_strict_' + themes[i]);
                done();
            });
        });

        it('DatePicker_Placeholder', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.placeholder_Id).clear();
                element(helper.placeholder_Id).sendKeys("Select your Date of Birth" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with placeholder_' + themes[i]);
                done();
            });
        });
        it('DatePicker_show_readonly', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.read_Id).click();
                element(helper.value_Id).sendKeys("2/12/2019" + Key.ENTER);
                element(helper.show_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with show_' + themes[i]);
                done();
            });
        });
        it('DatePicker_show_hide', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.value_Id).sendKeys("2/12/2019" + Key.ENTER);
                element(helper.show_Id).click();
                element(helper.hide_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with show_' + themes[i]);
                done();
            });
        });
        it('DatePicker_show_focusOut', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.value_Id).sendKeys("2/12/2019" + Key.ENTER);
                element(helper.show_Id).click();
                element(helper.focusOut_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with show_' + themes[i]);
                done();
            });
        });
        it('DatePicker_show', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                element(helper.show_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with show_' + themes[i]);
                done();
            });
        });
        it('DatePicker_focusIn', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.focusIn_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_focusIn_' + themes[i]);
                done();
            });
        });
        it('DatePicker_value_focusIn', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                element(helper.focusIn_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_focusIn_' + themes[i]);
                done();
            });
        });

        it('DatePicker_focusOut', function (done) {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
                element(helper.focusIn_Id).click();
                element(helper.focusOut_Id).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('content')), 'Datepicker_with_focusIn_' + themes[i]);
                done();
            });
        });
    }
});