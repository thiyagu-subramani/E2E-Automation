import { browser, element, Key, By, by, protractor } from "@syncfusion/ej2-base/e2e/index";
import { Helper } from "./Helper/DateTimePickerHelper";
import { Property, queryParams } from "@syncfusion/ej2-base";

var helper: Helper = new Helper();

//var event = new Event('change');
let themes: String[] = ["material", "fabric", "bootstrap", "highcontrast"];
//let themes: String[] = ["material"];
describe('DateTimePicker', function () {
    for (let i = 0; i < themes.length; i++) {
        let fileName: string = 'https://cdn.syncfusion.com/ej2/ej2-calendars/styles/' + themes[i] + '.css';
        it('Default DateTimePicker', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_default_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimepicker_default_datepoup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimepicker_default_timepopup_' + themes[i]);

        });
        it('DateTimePicker_with_RTL', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_rtl_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimepicker_rtl_datepoup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimepicker_rtl_timepopup' + themes[i]);

        });

        it('DateTimePicker_with_RTL_readonly', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.read_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_rtl_readonly_input_' + themes[i]);
        });

        it('DateTimePicker_with_RTL_disable', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.enable_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_rtl_disable__input_' + themes[i]);
        });

        it('DateTimePicker_with_RTL_today', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.today_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_today_datepopup_' + themes[i]);

        });

        it('DateTimePicker_with_RTL_clear', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.clear_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_rtl_clear_input_' + themes[i]);

        });

        it('DateTimePicker_RTL_Floatlabel_never', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            // let bgColor: string = "document.body.setAttribute('style', 'background-color: black')";
            // browser.executeScript(bgColor);
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_rtl_float_never_input_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_rtl_flolat_neverClear_input_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_rtl_float_neverFocusOut_input_' + themes[i]);
        });

        it('DateTimePicker_RTL_Floatlabel_auto', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            // let bgColor: string = "document.body.setAttribute('style', 'background-color: black')";
            // browser.executeScript(bgColor);
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_rtl_float_auto_input_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_rtl_flolat_autoClear_input_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_rtl_float_autoFocusOut_input_' + themes[i]);
        });

        it('DateTimePicker_RTL_Floatlabel_always', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_rtl_float_always_input_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_rtl_flolat_alwaysClear_input_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_rtl_float_alwaysFocusOut_input_' + themes[i]);
        });

        it('DateTimePicker_RTL_Format', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl_format_yy_MMMM_dd_hh_mm_a_' + themes[i]);
        });

        it('DateTimePicker_RTL_Format', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl_format_yy_MMMM_dd_HH_mm_' + themes[i]);
        });

        it('DateTimePicker_RTL_Format', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl_format_dd_MMMM_HH_mm_' + themes[i]);
        });

        it('DateTimePicker_RTL_TimeFormat_HH_mm', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl_timeformat_HH_mm_input_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl_TimeFormat_HH_mm_' + themes[i]);
        });

        it('DateTimePicker_RTL_TimeFormat_HH', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl_timeformat_HH_input_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl_TimeFormat_HH_' + themes[i]);
        });

        it('DateTimePicker_RTL_start_Year', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_start_year_' + themes[i]);
        });

        it('DateTimePicker_RTL_start_decade', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_start_decade_' + themes[i]);
        });

        it('DateTimePicker_RTL_firstday', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_firstday2_' + themes[i]);
        });

        it('DateTimePicker_RTL_firstday', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_firstday3_' + themes[i]);
        });

        it('DateTimePicker_RTL_firstday', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_firstday4_' + themes[i]);
        });

        it('DateTimePicker_RTL_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_firstday5_' + themes[i]);
        });

        it('DateTimePicker_RTL_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_firstday6_' + themes[i]);
        });


        it('DateTimePicker with RTL and Min', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_with_min_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl with min_timepopup_' + themes[i]);

        });

        it('DateTimePicker with RTL and Min_value', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2032 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_min_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl_min_value_timepopup_' + themes[i]);
        });

        it('DateTimePicker with RTL and Min_value*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2028 12:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl with min_High_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl with min_High_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl with min_High_value_timepopup_' + themes[i]);
        });
        it('DateTimePicker with RTL and Min_value', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl_min_value_same_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_min_value_same_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl_min_value_same_timepopup_' + themes[i]);
        });
        it('DateTimePicker with RTL and Min_value', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2030 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl_min_value2_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_min_value2_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl_min_value2_timepopup_' + themes[i]);
        });
        it('DateTimePicker with RTL and Max', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/2/2012 2:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl with max_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl_max_timepopup_' + themes[i]);
        });

        it('DateTimePicker with RTL and Max_value', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2012 2:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl_max_input' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl with max_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl with max_value_timepoupup_' + themes[i]);
        });
        it('DateTimePicker with RTL and Max_value*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl max_low_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl max_low_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl with max_low_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker with RTL and Max_value', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012 9:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl with max_equal_value__input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl with max_equal_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_Rtl with max_equal_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_rtl_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("3/28/1111 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_rtl_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_rtl_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_rtl_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("3/28/9999 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_value2_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_rtl_value2_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_rtl_value2_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_rtl_min_max', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_rtl_min_max_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_rtl_min_max_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_rtl_min_max_same', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/2/2012 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_rtl_min_max_same_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_rtl_min_max_same_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_rtl_min_max_value', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_min_max_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_rtl_min_max_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_rtl_min_max_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_rtl_min_max_value_same', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_min_max_value_same_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_rtl_min_max_value_same_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_rtl_min_max_value_same_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_rtl_min_high_max', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_rtl_min_high_max_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_rtl_min_high_max_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_rtl_value_strictmode case -1*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("3/28/1111 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_value_strictmode1_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_rtl_value_strictmode1_datepopup_' + themes[i]);
        });

        it('DateTimePicker_rtl_value_strictmode case -2*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("3/28/9999 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_value2_strictmode2_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_rtl_value2_strictmode2_datepopup_' + themes[i]);
        });

        it('DateTimePicker with RTL and Max_value_strictmode case-3*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl max_low_value_strictmode3_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl max_low_value_strictmode3_datepopup_' + themes[i]);
        });

        it('DateTimePicker with RTL and Min_value_strictmode case-4*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2028 12:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl with min_High_value_strictmode4_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl with min_High_value_strictmode4_datepopup_' + themes[i]);
        });

        it('DateTimePicker_rtl_step', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.step_Id).clear();
            await element(helper.step_Id).sendKeys("120" + Key.ENTER);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_rtl_step_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_rtl_step', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.step_Id).clear();
            await element(helper.step_Id).sendKeys("60" + Key.ENTER);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_rtl_step2_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_rtl_width', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.width_Id).clear();
            await element(helper.width_Id).sendKeys("420" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimePicker_rtl_width_input_' + themes[i]);
        });

        it('DateTimePicker_rtl_placeholder', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.placeholder_Id).clear();
            await element(helper.placeholder_Id).sendKeys("Select Your booking date and time" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_placeholder_input_' + themes[i]);
        });

        it('DateTimePicker_rtl_show', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            await browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_rtl_show_datepopup_' + themes[i]);
        });
        it('DateTimePicker_rtl_hide', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.show_Id).click();
            await element(helper.hide_Id).click();
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_hide_input_' + themes[i]);
        });
        it('DateTimePicker_rtl_focusIn', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_focusIn_input_' + themes[i]);
        });
        it('DateTimePicker_rtl_blur', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            await element(helper.blur_Id).click();
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_blur_input_' + themes[i]);
        });

        it('DateTimePicker_Rtl_start_depth', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("3/2/2016 12:00 AM" + Key.ENTER);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.depth_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_Rtl_start_depth_datepoupup1_' + themes[i]);
            await element(By.xpath("//*[contains(@class,'e-selected')]")).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_Rtl_start_depth_datepoupup2_' + themes[i]);
        });

        it('DateTimePicker_Rtl_start_depth_2', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("3/2/2016 12:00 AM" + Key.ENTER);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.depth_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_Rtl_start_depth_2_datepoupup1_' + themes[i]);
            await element(By.xpath("//*[contains(@class,'e-selected')]")).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_Rtl_start_depth_2_datepoupup2_' + themes[i]);
        });

        it('DateTimePicker_Rtl_start_depth_3', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("3/2/2016 12:00 AM" + Key.ENTER);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_Rtl_start_depth_3_datepoupup1_' + themes[i]);
            await element(By.xpath("//*[contains(@class,'e-selected')]")).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_Rtl_start_depth_3_datepoupup2_' + themes[i]);
            await element(By.xpath("//*[contains(@class,'e-selected')]")).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_Rtl_start_depth_3_datepoupup3_' + themes[i]);
        });

        // enable property e2e test cases

        it('DateTimePicker_disable', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.enable_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_disable_input_' + themes[i]);
        });

        it('DateTimePicker_disable_show', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.enable_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_disable_show_input_' + themes[i]);
        });

        it('DateTimePicker_disable_focus', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.enable_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_disable_focus_input_' + themes[i]);
        });

        // readonly property
        it('DateTimePicker_readonly', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.read_Id).click();
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_readonly_input_' + themes[i]);
        });

        it('DateTimePicker_readonly_focus', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.read_Id).click();
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_readonly_focus_input_' + themes[i]);
        });

        //  Clearbutton property

        it('DateTimePicker_with_clear', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.clear_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_clear_input_' + themes[i]);
        });

        it('DateTimePicker_with_clear_focus', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.clear_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimepicker_clear_focus_input_' + themes[i]);
        });

        //  weekNumber property

        it('DateTimePicker_with_WeekNumber', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimepicker_weeknumber_datepoup_' + themes[i]);
            // await element(helper.timeIcon_className).click();
            // browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimepicker_weeknumber_timepopup' + themes[i]);

        });

        it('DateTimePicker_with_weekNumber_today', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.today_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_week_today_datepopup_' + themes[i]);

        });

        it('DateTimePicker_weekNumber_firstday', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_weekNumber_firstday_2_' + themes[i]);
        });

        it('DateTimePicker_weekNumber_firstday', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_weekNumber_firstday_3_' + themes[i]);
        });

        it('DateTimePicker_weekNumber_firstday', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_weekNumber_firstday_4_' + themes[i]);
        });

        it('DateTimePicker_weekNumber_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_weekNumber_firstday_5_' + themes[i]);
        });

        it('DateTimePicker_weekNumber_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_weekNumber_firstday6_' + themes[i]);
        });

        it('DateTimePicker_weekNumber_Min', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_weekNumber_with_min_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_weekNumber_min_timepopup_' + themes[i]);

        });

        it('DateTimePicker_weekNumber_Min_value', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2032 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_weekNumber_min_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_weekNumber_min_value_timepopup_' + themes[i]);
        });

        it('DateTimePicker_weekNumber_Min_value*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2028 12:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_weekNumber_min_High_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_weekNumber_min_High_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_weekNumber_min_High_value_timepopup_' + themes[i]);
        });
        it('DateTimePicker_weekNumber_Min_value', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_weekNumber_min_value_same_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_weekNumber_min_value_same_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_weekNumber_min_value_same_timepopup_' + themes[i]);
        });
        it('DateTimePicker_weekNumber_Min_value', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2030 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_weekNumber_min_value2_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_weekNumber_min_value2_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_weekNumber_min_value2_timepopup_' + themes[i]);
        });
        it('DateTimePicker_weekNumber_Max', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/2/2012 2:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_weekNumber_max_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_weekNumber_timepopup_' + themes[i]);
        });

        it('DateTimePicker_weekNumber_Max_value', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2012 2:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_weekNumber_max_input' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_weekNumber_max_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_weekNumber_max_value_timepoupup_' + themes[i]);
        });
        it('DateTimePicker_weekNumber_Max_value*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_weekNumber_max_low_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_weekNumber_max_low_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_weekNumber_max_low_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_weeknumber_Max_value', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012 9:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_weekNumber_max_equal_value__input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_weekNumber_max_equal_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_weekNumber_max_equal_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_weekNumber_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("3/28/1111 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_weeknumber_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_weekNumber_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_weekNumber_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_weekNumber_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("3/28/9999 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_weekNumber_value2_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_weeKNumber_value2_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_weekNumber_value2_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_weekNumber_min_max', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_weekNumber_min_max_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_weekNumber_min_max_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_weekNumber_min_max_same', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/2/2012 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_weekNumber_min_max_same_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_weekNumber_min_max_same_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_weekNumber_min_max_value', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_weekNumber_min_max_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_weekNumber_min_max_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_weekNumber_min_max_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_weekNumber_min_max_value_same', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_weekNumber_min_max_value_same_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_weekNumber_min_max_value_same_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_weekNumber_min_max_value_same_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_week_min_high_max', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_week_min_high_max_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_week_min_high_max_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_weekNumber_value_strictmode case -1*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("3/28/1111 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_weekNumber_value_strictmode1_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_weekNumber_value_strictmode1_datepopup_' + themes[i]);
        });

        it('DateTimePicker_weekNumber_value_strictmode case -2*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("3/28/9999 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_rtl_value2_strictmode2_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_weekNumber_value2_strictmode2_datepopup_' + themes[i]);
        });

        it('DateTimePicker with weekNumber and Max_value_strictmode case-3*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_weekNumber_max_low_value_strictmode3_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_weekNumber_max_low_value_strictmode3_datepopup_' + themes[i]);
        });

        it('DateTimePicker with weekNumber and Min_value_strictmode case-4*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2028 12:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_weekNumber_min_High_value_strictmode4_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_weekNumber_min_High_value_strictmode4_datepopup_' + themes[i]);
        });


        it('DateTimePicker_weekNumber_width', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.width_Id).clear();
            await element(helper.width_Id).sendKeys("420" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_weekumber_width_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_weekumber_width_datepopup_' + themes[i]);
        });


        it('DateTimePicker_weeknumber_show', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            await browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_weekNumber_show_datepopup_' + themes[i]);
        });
        it('DateTimePicker_weekNumber_hide', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.show_Id).click();
            await element(helper.hide_Id).click();
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_weeknumber_hide_input_' + themes[i]);
        });

        // today property e2e specs

        it('DateTimePicker_today', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_today_datepopup_' + themes[i]);

        });

        it('DateTimePicker_today_firstday', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_today_firstday_2_' + themes[i]);
        });

        it('DateTimePicker_today_firstday', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_today_firstday_3_' + themes[i]);
        });

        it('DateTimePicker_today_firstday', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_today_firstday_4_' + themes[i]);
        });

        it('DateTimePicker_today_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_today_firstday_5_' + themes[i]);
        });

        it('DateTimePicker_today_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_today_firstday6_' + themes[i]);
        });

        it('DateTimePicker_today_Min', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_today_with_min_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_today_min_timepopup_' + themes[i]);

        });

        it('DateTimePicker_today_Min_value', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2032 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_today_min_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_today_min_value_timepopup_' + themes[i]);
        });

        it('DateTimePicker_today_Min_value*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2028 12:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_today_min_High_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_today_min_High_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_today_min_High_value_timepopup_' + themes[i]);
        });
        it('DateTimePicker_today_Min_value', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_today_min_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_today_min_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_today_min_value_timepopup_' + themes[i]);
        });
        it('DateTimePicker_today_Min_value', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2030 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_today_min_value2_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_today_min_value2_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_today_min_value2_timepopup_' + themes[i]);
        });
        it('DateTimePicker_today_Max', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/2/2012 2:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_today_max_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_today_timepopup_' + themes[i]);
        });

        it('DateTimePicker_today_Max_value', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2012 2:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_today_max_input' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_today_max_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_today_max_value_timepoupup_' + themes[i]);
        });
        it('DateTimePicker_today_Max_value*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_today_max_low_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_today_max_low_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_today_max_low_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_today_Max_value', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012 9:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_today_max_equal_value__input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_today_max_equal_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_today_max_equal_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_today_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.value_Id).sendKeys("3/28/1111 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_today_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_today_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_today_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_today_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.value_Id).sendKeys("3/28/9999 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_today_value2_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_today_value2_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_today_value2_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_today_min_max', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_today_min_max_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_today_min_max_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_today_min_max_same', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/2/2012 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_today_min_max_same_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_today_min_max_same_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_today_min_max_value', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_today_min_max_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_today_min_max_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_today_min_max_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_today_min_max_value_same', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_today_min_max_value_same_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_today_min_max_value_same_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_today_min_max_value_same_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_today_min_high_max', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_today_min_high_max_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_today_min_high_max_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_today_width', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.width_Id).clear();
            await element(helper.width_Id).sendKeys("420" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_weekumber_width_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_today_width_datepopup_' + themes[i]);
        });


        it('DateTimePicker_today_show', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            await browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_today_show_datepopup_' + themes[i]);
        });
        it('DateTimePicker_today_hide', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.show_Id).click();
            await element(helper.hide_Id).click();
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_today_hide_input_' + themes[i]);
        });

        //  floatlabel property

        it('DateTimePicker_Floatlabel_never', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            // let bgColor: string = "document.body.setAttribute('style', 'background-color: black')";
            // browser.executeScript(bgColor);
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_float_never_input_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_flolat_neverClear_input_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_float_neverFocusOut_input_' + themes[i]);


        });

        it('DateTimePicker_Floatlabel_auto', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            // let bgColor: string = "document.body.setAttribute('style', 'background-color: black')";
            // browser.executeScript(bgColor);
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_float_auto_input_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_flolat_autoClear_input_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_float_autoFocusOut_input_' + themes[i]);


        });

        it('DateTimePicker_Floatlabel_always', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            // let bgColor: string = "document.body.setAttribute('style', 'background-color: black')";
            // browser.executeScript(bgColor);
            browser.executeScript(path);
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_float_always_input_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_flolat_alwaysClear_input_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimepicker_float_alwaysFocusOut_input_' + themes[i]);
        });

        //  format and time format property

        it('DateTimePicker_Format', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            // await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_format_dd_MMMM_yy_hh_mm_a_' + themes[i]);
        });
        it('DateTimePicker_Format', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_format_yy_MMMM_dd_HH_mm_' + themes[i]);
        });
        it('DateTimePicker_Format', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_format_dd_MMMM_HH_mm_' + themes[i]);
        });

        it('DateTimePicker_Format_TimeFormat', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_format_dd_MMMM_yy_hh_mm_a_&_HH_mm_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_format_dd_MMMM_yy_hh_mm_a_&_HH_mm_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_format_dd_MMMM_yy_hh_mm_a_&_HH_mm_timepopup_' + themes[i]);
        });

        it('DateTimePicker_Format_TimeFormat', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_format_dd_MMMM_yy_hh_mm_a_&_HH_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_format_dd_MMMM_yy_hh_mm_a_&_HH_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_format_dd_MMMM_yy_hh_mm_a_&_HH_timepopup_' + themes[i]);
        });

        it('DateTimePicker_Format_TimeFormat', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_format_yy_MMMM_dd_HH_mm_&_HH_mm_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_format_yy_MMMM_dd_HH_mm_&_HH_mm_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_format_yy_MMMM_dd_HH_mm_&_HH_mm_timepopup_' + themes[i]);
        });

        it('DateTimePicker_Format_TimeFormat', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_format_yy_MMMM_dd_hh_mm_a_&_HH_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_format_yy_MMMM_dd_hh_mm_a_&_HH_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_format_yy_MMMM_dd_hh_mm_a_&_HH_timepopup_' + themes[i]);
        });

        it('DateTimePicker_Format_TimeFormat', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_format_dd_MMMM_HH_mm_&_HH_mm_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_format_dd_MMMM_HH_mm_&_HH_mm_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_format_dd_MMMM_HH_mm_&_HH_mm_timepopup_' + themes[i]);
        });

        it('DateTimePicker_Format_TimeFormat', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_format_dd_MMMM_HH_mm_&_HH_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_format_dd_MMMM_HH_mm_&_HH_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_format_dd_MMMM_HH_mm_&_HH_timepopup_' + themes[i]);
        });

        it('DateTimePicker_TimeFormat_HH_mm', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_timeformat_HH_mm_input_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_TimeFormat_HH_mm_' + themes[i]);
        });
        it('DateTimePicker_TimeFormat_HH', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_timeformat_HH_input_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_TimeFormat_HH_' + themes[i]);
        });

        it('DateTimePicker_start_year_rtl', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_year_rtl_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_start_year_rtl_timepopup_' + themes[i]);

        });

        it('DateTimePicker_start_year_today', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_year_today_datepopup_' + themes[i]);

        });

        it('DateTimePicker_start_year_Min', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_year_with_min_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_start_year_min_timepopup_' + themes[i]);

        });

        it('DateTimePicker_start_year_Min_value', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("4/2/2039 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("8/22/2039 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_year_min_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_start_year_min_value_timepopup_' + themes[i]);
        });

        it('DateTimePicker_start_year_Min_value*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("8/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2028 12:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_start_year_min_High_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_year_min_High_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_start_year_min_High_value_timepopup_' + themes[i]);
        });
        it('DateTimePicker_start_year_Min_value', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_start_year_min_value_same_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_year_min_value_same_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_start_year_min_value_same_timepopup_' + themes[i]);
        });

        it('DateTimePicker_start_year_Max', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/2/2012 2:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_year_max_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_start_year_max_timepopup_' + themes[i]);
        });

        it('DateTimePicker_start_year_Max_value', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("8/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2012 2:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_start_year_max_input' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_year_max_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_start_year_max_value_timepoupup_' + themes[i]);
        });
        it('DateTimePicker_start_year_Max_value*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_start_year_max_low_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_year_max_low_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_start_year_max_low_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_start_year_Max_value', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("5/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/22/2012 9:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_start_year_max_equal_value__input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_year_max_equal_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_start_year_max_equal_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_start_year_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("3/28/1111 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_start_year_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_year_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_start_year_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_start_year_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("3/28/9999 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_start_year_value2_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_year_value2_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_start_year_value2_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_start_year_min_max', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_year_min_max_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_start_year_min_max_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_start_year_min_max_same', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/2/2012 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_year_min_max_same_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_start_year_min_max_same_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_start_year_min_max_value', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("8/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("6/12/2012 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_start_year_min_max_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_year_min_max_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_start_year_min_max_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_start_year_min_max_value_same', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_start_year_min_max_value_same_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_year_min_max_value_same_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_start_year_min_max_value_same_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_start_year_min_high_max', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_year_min_high_max_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_start_year_min_high_max_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_strat_year_show', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("6/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_year_min_high_max_datepopup_' + themes[i]);
        });


        it('DateTimePicker_start_year_value_stict*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("3/28/1111 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_start_year_value_strict1_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_year_value_strict1_datepopup_' + themes[i]);
        });

        it('DateTimePicker_start_year_value_strict*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("3/28/9999 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_start_year_value2_strict2_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_year_value2_strict2_datepopup_' + themes[i]);
        });

        it('DateTimePicker_start_year_Max_value_strict*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_start_year_max_low_value_strict4_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_year_max_low_value_strict4_datepopup_' + themes[i]);
        });

        it('DateTimePicker_start_year_Min_value_strict_*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("8/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2028 12:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_start_year_min_High_value_strict5_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_year_min_High_value_strict5_datepopup_' + themes[i]);
        });

        it('DateTimePicker_start_decade_rtl', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_decade_rtl_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_start_decade_rtl_timepopup_' + themes[i]);

        });

        it('DateTimePicker_start_decade_today', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_decade_today_datepopup_' + themes[i]);

        });

        it('DateTimePicker_start_decade_Min', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_decade_with_min_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_start_decade_min_timepopup_' + themes[i]);

        });

        it('DateTimePicker_start_decade_Min_value', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("4/2/2025 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("8/22/2027 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_decade_min_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_start_decade_min_value_timepopup_' + themes[i]);
        });

        it('DateTimePicker_start_decade_Min_value*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("8/2/2038 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2030 12:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_start_decade_min_High_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_decade_min_High_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_start_decade_min_High_value_timepopup_' + themes[i]);
        });
        it('DateTimePicker_start_decade_Min_value', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_start_decade_min_value_same_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_decade_min_value_same_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_start_decade_min_value_same_timepopup_' + themes[i]);
        });

        it('DateTimePicker_start_decade_Max', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/2/2012 2:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_decade_max_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_start_decade_max_timepopup_' + themes[i]);
        });

        it('DateTimePicker_start_decade_Max_value', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("8/22/2018 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2012 2:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_start_decade_max_input' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_decade_max_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_start_decade_max_value_timepoupup_' + themes[i]);
        });
        it('DateTimePicker_start_decade_Max_value*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_start_decade_max_low_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_decade_max_low_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_start_decade_max_low_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_start_decade_Max_value', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("5/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/22/2012 9:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_start_decade_max_equal_value__input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_decade_max_equal_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_start_decade_max_equal_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_start_decade_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("3/28/1111 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_start_decade_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_decade_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_start_decade_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_start_decade_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("3/28/9999 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_start_decade_value2_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_decade_value2_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_start_decade_value2_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_start_decade_min_max', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/22/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_decade_min_max_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_start_decade_min_max_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_start_decade_min_max_same', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/2/2012 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_decade_min_max_same_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_start_decade_min_max_same_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_start_decade_min_max_value', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("8/22/2018 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("6/12/2016 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_start_decade_min_max_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_decade_min_max_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_start_decade_min_max_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_start_decade_min_max_value_same', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_start_decade_min_max_value_same_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_decade_min_max_value_same_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_start_decade_min_max_value_same_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_start_decade_min_high_max', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/2/2016 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_decade_min_high_max_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_start_decade_min_high_max_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_start_decade_show', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("6/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.show_Id).clear();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_decade_min_high_max_datepopup_' + themes[i]);
        });


        it('DateTimePicker_start_decade_value_stict*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("3/28/1111 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_start_decade_value_strict1_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_decade_value_strict1_datepopup_' + themes[i]);
        });

        it('DateTimePicker_start_decade_value_strict*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("3/28/9999 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_start_decade_value2_strict2_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_decade_value2_strict2_datepopup_' + themes[i]);
        });

        it('DateTimePicker_start_decade_Max_value_strict*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_start_decade_max_low_value_strict4_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_decade_max_low_value_strict4_datepopup_' + themes[i]);
        });

        it('DateTimePicker_start_decade_Min_value_strict_*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("8/2/2028 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2022 12:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_start_decade_min_High_value_strict5_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_start_decade_min_High_value_strict5_datepopup_' + themes[i]);
        });


        it('DateTimePicker_Min', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_min_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_min_timepopup_' + themes[i]);

        });

        it('DateTimePicker_Min_value', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2032 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_min_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_min_value_timepopup_' + themes[i]);
        });

        it('DateTimePicker_Min_value*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2028 12:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_min_High_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_min_High_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_min_High_value_timepopup_' + themes[i]);
        });
        it('DateTimePicker_Min_value', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_min_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_min_value_same_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_min_value_same_timepopup_' + themes[i]);
        });
        it('DateTimePicker_Min_value', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2030 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_min_value2_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_min_value2_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_min_value2_timepopup_' + themes[i]);
        });
        it('DateTimePicker_Max', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/2/2012 2:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_max_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_max_timepopup_' + themes[i]);
        });

        it('DateTimePicker_Max_value', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2012 2:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_max_input' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_max_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_max_value_timepoupup_' + themes[i]);
        });
        it('DateTimePicker_Max_value*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_max_low_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_max_low_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_with max_low_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_Max_value', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012 9:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_max_equal_value__input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_max_equal_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_max_equal_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("3/28/1111 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("3/28/9999 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_value2_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_value2_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_value2_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_min_max', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_min_max_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_min_max_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_min_max_same', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/2/2012 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_min_max_same_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_min_max_same_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_min_max_value', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_min_max_value_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_min_max_value_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_min_max_value_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_min_max_value_same', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_min_max_value_same_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_min_max_value_same_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_min_max_value_same_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_min_high_max', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_min_high_max_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_min_high_max_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_value_strictmode case -1*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("3/28/1111 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_value_strictmode1_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_value_strictmode1_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_value_strictmode1_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_value_strictmode case -2*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("3/28/9999 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_value2_strictmode2_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_value2_strictmode2_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_value2_strictmode2_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_Max_value_strictmode case-3*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_max_low_value_strictmode3_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_max_low_value_strictmode3_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_max_low_value_strictmode3_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_Min_value_strictmode case-4*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2028 12:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_Rtl with min_High_value_strictmode4_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_min_High_value_strictmode4_datepopup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_min_High_value_strictmode4_timepopup_' + themes[i]);
        });

        it('DateTimePicker_step', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.step_Id).clear();
            await element(helper.step_Id).sendKeys("120" + Key.ENTER);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_step_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_step', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.step_Id).clear();
            await element(helper.step_Id).sendKeys("60" + Key.ENTER);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_step2_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_value_strictmode case -1*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("3/28/1111 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_value_strictmode1_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_value_strictmode1_datepopup_' + themes[i]);
        });

        it('DateTimePicker_rtl_value_strictmode case -2*', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("3/28/9999 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_value2_strictmode2_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_value2_strictmode2_datepopup_' + themes[i]);
        });

        it('DateTimePicke_Max_value_strictmode case-3*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicke_max_low_value_strictmode3_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_max_low_value_strictmode3_datepopup_' + themes[i]);
        });

        it('DateTimePicker_Min_value_strictmode case-4*', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2028 12:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'Datetimepicker_min_High_value_strictmode4_input_' + themes[i]);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_min_High_value_strictmode4_datepopup_' + themes[i]);
        });

        it('DateTimePicker_RTL_firstday', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_firstday2_' + themes[i]);
        });

        it('DateTimePicker_RTL_firstday', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_Rtl_firstday3_' + themes[i]);
        });

        it('DateTimePicker_firstday', async () => {
            browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_firstday4_' + themes[i]);
        });

        it('DateTimePicker_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_firstday5_' + themes[i]);
        });

        it('DateTimePicker_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'Datetimepicker_firstday6_' + themes[i]);
        });

        it('DateTimePicker_width', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.width_Id).clear();
            await element(helper.width_Id).sendKeys("420" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateTimePicker_width_input_' + themes[i]);
        });

        it('DateTimePicker_placeholder', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.placeholder_Id).clear();
            await element(helper.placeholder_Id).sendKeys("Select Your booking date and time" + Key.ENTER);
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_placeholder_input_' + themes[i]);
        });

        it('DateTimePicker_show', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            await browser.executeScript(path);
            await element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_show_datepopup_' + themes[i]);
        });
        it('DateTimePicker_hide', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.show_Id).click();
            await element(helper.hide_Id).click();
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_hide_input_' + themes[i]);
        });
        it('DateTimePicker_focusIn', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_focusIn_input_' + themes[i]);
        });
        it('DateTimePicker_blur', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            await element(helper.blur_Id).click();
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_blur_input_' + themes[i]);
        });

        it('DateTimePicker_blur', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            await element(helper.blur_Id).click();
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_blur_input_' + themes[i]);
        });

        it('DateTimePicker_step', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.step_Id).clear();
            await element(helper.step_Id).sendKeys("1200" + Key.ENTER);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_step_4_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_step', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.step_Id).clear();
            await element(helper.step_Id).sendKeys("12000" + Key.ENTER);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_step_outof_timepoupup_' + themes[i]);
        });

        it('DateTimePicker_error_class', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("3/2/2016 8:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("3/2/2016 10:00 AM" + Key.ENTER);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_error_class_datepoupup_' + themes[i]);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'DateTimePicker_error_class_timepoupup_' + themes[i]);
            await element(helper.value_Id).sendKeys("3/2/2016 12:00 AM" + Key.ENTER);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('e-datetime-wrapper')), 'DateTimePicker_error_class_input_' + themes[i]);
        });

        it('DateTimePicker_start_depth', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("3/2/2016 12:00 AM" + Key.ENTER);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.depth_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_depth_datepoupup1_' + themes[i]);
            await element(By.xpath("//*[contains(@class,'e-selected')]")).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_depth_datepoupup2_' + themes[i]);
        });

        it('DateTimePicker_start_depth_2', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("3/2/2016 12:00 AM" + Key.ENTER);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.depth_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_depth_2_datepoupup1_' + themes[i]);
            await element(By.xpath("//*[contains(@class,'e-selected')]")).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_depth_2_datepoupup2_' + themes[i]);
           // await element(By.xpath("//*[contains(@class,'e-selected')]")).click();
           // browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_depth_3_datepoupup3_' + themes[i]);
        });

        it('DateTimePicker_start_depth_3', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("3/2/2016 12:00 AM" + Key.ENTER);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.dateIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_depth_3_datepoupup1_' + themes[i]);
            await element(By.xpath("//*[contains(@class,'e-selected')]")).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_depth_3_datepoupup2_' + themes[i]);
            await element(By.xpath("//*[contains(@class,'e-selected')]")).click();
            browser.compareScreen(element(By.id('dateTime_datepopup')), 'DateTimePicker_start_depth_3_datepoupup3_' + themes[i]);
        });

         it('DateTimePicker_TimeFormat_HH_mm_step', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.step_Id).clear();
            await element(helper.step_Id).sendKeys("10" + Key.ENTER);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_TimeFormat_HH_mm_step_timepopup_' + themes[i]);
        });
        it('DateTimePicker_TimeFormat_HH_step', async () => {
            await browser.get(browser.basePath + '/demos/dateTimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.timeFormat_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.step_Id).clear();
            await element(helper.step_Id).sendKeys("10" + Key.ENTER);
            await element(helper.timeIcon_className).click();
            browser.compareScreen(element(By.id('dateTime_timepopup')), 'Datetimepicker_TimeFormat_HH_step_timepopup_' + themes[i]);
        });
    }
});