import { browser, element, Key, By, by, protractor } from "@syncfusion/ej2-base/e2e/index";
import { Helper } from "./Helper/DateTimePickerHelper";
import { Property, queryParams } from "@syncfusion/ej2-base";

var helper: Helper = new Helper();

//var event = new Event('change');
//let themes: String[] = ["material", "fabric", "bootstrap", "highcontrast"];
let themes: String[] = ["material"];
describe('DateTimePicker', function () {
    for (let i = 0; i < themes.length; i++) {
        let fileName: string = 'https://cdn.syncfusion.com/ej2/ej2-calendars/styles/' + themes[i] + '.css';
        // it('Default DateTimePicker', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_default_input_' + themes[i]);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimepicker_default_datepoup_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimepicker_default_timepopup' + themes[i]);
        //         done();
        //     });
        // });
        // it('DateTimePicker_with_RTL', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_rtl_input_' + themes[i]);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimepicker_rtl_datepoup_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimepicker_rtl_timepopup' + themes[i]);
        //         done();
        //     });
        // }, 1200000);

        // it('DateTimePicker_with_RTL_readonly', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.read_Id).click();
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_rtl_readonly__input_' + themes[i]);
        //         done();
        //     });
        // },1200000);

        // // it('DateTimePicker_with_RTL_readonly_show', function (done) {
        // //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        // //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        // //     browser.executeScript(path).then(function () {
        // //         element(helper.rtl_Id).click();
        // //         element(helper.read_Id).click();
        // //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        // //         element(helper.show_Id).click();
        // //         browser.sleep(2000);
        // //         browser.compareScreen(element(By.id('content')), 'Datetimepicker_Rtl_readonly_show_date_' + themes[i]);
        // //         done();
        // //     });
        // // },1200000);

        // it('DateTimePicker_with_RTL_disable', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.enable_Id).click();
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_rtl_disable__input_' + themes[i]);
        //         done();
        //     });
        // },1200000);

        // it('DateTimePicker_with_RTL_today', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.today_Id).click();
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_today_datepopup_' + themes[i]);
        //         done();
        //     });
        // },1200000);

        // it('DateTimePicker_with_RTL_clear', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.clear_Id).click();
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_rtl_clear_input_' + themes[i]);
        //         done();
        //     });
        // },1200000);

        // it('DateTimePicker_RTL_Floatlabel_never', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     // let bgColor: string = "document.body.setAttribute('style', 'background-color: black')";
        //     // browser.executeScript(bgColor);
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_rtl_float_never_input_' + themes[i]);
        //         element(helper.clearIcon_ClassName).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_rtl_flolat_neverClear_input_' + themes[i]);
        //         element(helper.focusOut_Id).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_rtl_float_neverFocusOut_input_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_RTL_Floatlabel_auto', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     // let bgColor: string = "document.body.setAttribute('style', 'background-color: black')";
        //     // browser.executeScript(bgColor);
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_rtl_float_auto_input_' + themes[i]);
        //         element(helper.clearIcon_ClassName).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_rtl_flolat_autoClear_input_' + themes[i]);
        //         element(helper.focusOut_Id).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_rtl_float_autoFocusOut_input_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_RTL_Floatlabel_always', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     // let bgColor: string = "document.body.setAttribute('style', 'background-color: black')";
        //     // browser.executeScript(bgColor);
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
        //         element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_rtl_float_always_input_' + themes[i]);
        //         element(helper.clearIcon_ClassName).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_rtl_flolat_alwaysClear_input_' + themes[i]);
        //         element(helper.focusOut_Id).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_rtl_float_alwaysFocusOut_input_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_RTL_Format', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl_format_yy_MMMM_dd_hh_mm_a_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_RTL_Format', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
        //         element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl_format_yy_MMMM_dd_HH_mm_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_RTL_Format', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
        //         element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
        //         element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl_format_dd_MMMM_HH_mm_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_RTL_TimeFormat_HH_mm', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl_timeformat_HH_mm_input_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl_TimeFormat_HH_mm_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_RTL_TimeFormat_HH', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
        //         element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl_timeformat_HH_input_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl_TimeFormat_HH_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_RTL_start_Year', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_start_year_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_RTL_start_decade', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
        //         element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_start_decade_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_RTL_firstday', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_firstday2_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_RTL_firstday', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_firstday3_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_RTL_firstday', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_firstday4_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_RTL_firstday', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_firstday5_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_RTL_firstday', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_firstday6_' + themes[i]);
        //         done();
        //     });
        // });


        // it('DateTimePicker with RTL and Min', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.min_Id).clear();
        //         element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl with min_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl with min_timepopup_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker with RTL and Min_value', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.min_Id).clear();
        //         element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
        //         element(helper.value_Id).sendKeys("2/2/2032 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl with min_value_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl with min_value_timepopup_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker with RTL and Min_value*', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.min_Id).clear();
        //         element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
        //         element(helper.value_Id).sendKeys("2/12/2028 12:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl with min_High_value_input_' + themes[i]);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl with min_High_value_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl with min_High_value_timepopup_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker with RTL and Min_value', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.min_Id).clear();
        //         element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
        //         element(helper.value_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl_min_value_input_' + themes[i]);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_min_value_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl_min_value_timepopup_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker with RTL and Min_value', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.min_Id).clear();
        //         element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
        //         element(helper.value_Id).sendKeys("2/22/2030 10:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl_min_value2_input_' + themes[i]);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_min_value2_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl_min_value2_timepopup_' + themes[i]);
        //         done();
        //     });
        // });


        // it('DateTimePicker with RTL and Max', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.max_Id).clear();
        //         element(helper.max_Id).sendKeys("2/2/2012 2:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl with max_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl_max_timepopup_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker with RTL and Max_value', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.max_Id).clear();
        //         element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
        //         element(helper.value_Id).sendKeys("2/2/2012 2:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl_max_input' + themes[i]);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl with max_value_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl with max_value_timepoupup_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker with RTL and Max_value*', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.max_Id).clear();
        //         element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
        //         element(helper.value_Id).sendKeys("3/28/2039 10:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl with max_High_low_input_' + themes[i]);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl with max_High_low_datepopup_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl with max_High_low_timepoupup_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker with RTL and Max_value', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.max_Id).clear();
        //         element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
        //         element(helper.value_Id).sendKeys("2/22/2012 9:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl with max_equal_value__input_' + themes[i]);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl with max_equal_value__datepopup_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl with max_equal_value__timepoupup_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_rtl_value*', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.value_Id).sendKeys("3/28/1111 10:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_value_input_' + themes[i]);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_rtl_value_datepopup_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_rtl_value_timepoupup_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_rtl_value*', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.value_Id).sendKeys("3/28/9999 10:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_value2_input_' + themes[i]);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_rtl_value2_datepopup_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_rtl_value2_timepoupup_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_rtl_min_max', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.min_Id).clear();
        //         element(helper.max_Id).clear();
        //         element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
        //         element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_rtl_min_max_datepopup_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_rtl_min_max_timepoupup_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_rtl_min_max_same', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.min_Id).clear();
        //         element(helper.max_Id).clear();
        //         element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
        //         element(helper.max_Id).sendKeys("2/2/2012 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_rtl_min_max_same_datepopup_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_rtl_min_max_same_timepoupup_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_rtl_min_max_value', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.min_Id).clear();
        //         element(helper.max_Id).clear();
        //         element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
        //         element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
        //         element(helper.value_Id).sendKeys("2/12/2012 10:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_min_max_value_input_' + themes[i]);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_rtl_min_max_value_datepopup_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_rtl_min_max_value_timepoupup_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_rtl_min_max_value_same', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.min_Id).clear();
        //         element(helper.max_Id).clear();
        //         element(helper.min_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
        //         element(helper.max_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
        //         element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_min_max_value_same_input_' + themes[i]);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_rtl_min_max_value_same_datepopup_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_rtl_min_max_value_same_timepoupup_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_rtl_min_max_value_same', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.min_Id).clear();
        //         element(helper.max_Id).clear();
        //         element(helper.min_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
        //         element(helper.max_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
        //         element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_min_max_value_same_input_' + themes[i]);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_rtl_min_max_value_same_datepopup_' + themes[i]);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_rtl_min_max_value_same_timepoupup_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_rtl_step', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.step_Id).clear();
        //         element(helper.step_Id).sendKeys("120" + Key.ENTER);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_rtl_step_timepoupup_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_rtl_step', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.step_Id).clear();
        //         element(helper.step_Id).sendKeys("60" + Key.ENTER);
        //         element(helper.timeIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_rtl_step2_timepoupup_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_rtl_width', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.width_Id).clear();
        //         element(helper.width_Id).sendKeys("420" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('content-wrapper')), 'DateTimePicker_rtl_width_input_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_rtl_placeholder', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.placeholder_Id).clear();
        //         element(helper.placeholder_Id).sendKeys("Select Your booking date and time" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_placeholder_input_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_rtl_show', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
        //         element(helper.show_Id).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_rtl_show_datepopup_' + themes[i]);
        //         done();
        //     });
        // });
        // it('DateTimePicker_rtl_hide', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
        //         element(helper.show_Id).click();
        //         element(helper.hide_Id).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_hide_input_' + themes[i]);
        //         done();
        //     });
        // });
        // it('DateTimePicker_rtl_focusIn', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.focusIn_Id).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_focusIn_input_' + themes[i]);
        //         done();
        //     });
        // });
        // it('DateTimePicker_rtl_blur', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
        //         element(helper.focusIn_Id).click();
        //         element(helper.blur_Id).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_blur_input_' + themes[i]);
        //         done();
        //     });
        // });

        // // enable property e2e test cases

        // it('DateTimePicker_disable', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.enable_Id).click();
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_disable_input_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_disable_show', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.enable_Id).click();
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.show_Id).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_disable_show_input_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_disable_focus', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.enable_Id).click();
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.focusIn_Id).click();
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_disable_focus_input_' + themes[i]);
        //         done();
        //     });
        // });

        // readonly property
        // it('DateTimePicker_readonly', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.read_Id).click();
        //         element(helper.dateIcon_className).click();
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_readonly_input_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_readonly_focus', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.read_Id).click();
        //         element(helper.focusIn_Id).click();
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_readonly_focus_input_' + themes[i]);
        //         done();
        //     });
        // });

        // Clearbutton property

        // it('DateTimePicker_with_clear', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.clear_Id).click();
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_clear_input_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_RTL_Floatlabel_never', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     let bgColor: string = "document.body.setAttribute('style', 'background-color: black')";
        //     browser.executeScript(bgColor);
        //     browser.executeScript(path).then(function () {
        //         element(helper.clear_Id).click();
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_clear_float_never_input_' + themes[i]);
        //         done();
        //     });
        // });
        // it('DateTimePicker_RTL_Floatlabel_auto', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     let bgColor: string = "document.body.setAttribute('style', 'background-color: black')";
        //     browser.executeScript(bgColor);
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_clear_float_auto_input_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_RTL_Floatlabel_always', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     let bgColor: string = "document.body.setAttribute('style', 'background-color: black')";
        //     browser.executeScript(bgColor);
        //     browser.executeScript(path).then(function () {
        //         element(helper.rtl_Id).click();
        //         element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
        //         element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.dateIcon_className).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_clear_float_always_input_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DateTimePicker_with_clear_focus', function (done) {
        //     browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path).then(function () {
        //         element(helper.clear_Id).click();
        //         element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
        //         element(helper.focusIn_Id).click();
        //         browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_clear_focus_input_' + themes[i]);
        //         done();
        //     });
        // });
    }
});