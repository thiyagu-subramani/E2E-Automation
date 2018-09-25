import { browser, element, Key, By, by, protractor } from "@syncfusion/ej2-base/e2e/index";
import { Helper } from "./Helper/TimePickerHelper";
import { Property, queryParams } from "@syncfusion/ej2-base";

var helper: Helper = new Helper();

//var event = new Event('change');
//let themes: String[] = ["material", "fabric", "bootstrap", "highcontrast"];
let themes: String[] = ["material"];
describe('TimePicker', function () {
    for (let i = 0; i < themes.length; i++) {
        let fileName: string = 'https://cdn.syncfusion.com/ej2/' + themes[i] + '.css';
        it('Default TimePicker', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("5/5/2018 12:00 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_default_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_default_popup_' + themes[i]);
        });
        it('TimePicker with RTL', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 12:00 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_rtl_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_rtl_popup_' + themes[i]);
        });
        it('TimePicker with RTL and disable', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.enable_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 12:00 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_rtl_abd_disable_input_' + themes[i]);
        });
        it('TimePicker with RTL and clear', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.clear_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 12:00 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_rtl_and_clear_input_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_rtl_and_clear_popup_' + themes[i]);
        });
        it('TimePicker with RTL and readonly', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.read_Id).click();
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_rtl_and_readonly_input_' + themes[i]);
        });
        it('TimePicker with RTL readonly and value', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.read_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 12:00 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_with_RTL_readonly_and_value_input1_' + themes[i]);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_with_RTL_readonly_and_value_input2_' + themes[i]);
        });

        it('TimePicker_RTL_floatlabel', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.floatLabel_Id).sendKeys(Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_rtl_floatlabel_never_1_' + themes[i]);
            await element(helper.value_Id).sendKeys("5/5/2018 12:00 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_rtl_floatlabel_never_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_rtl_floatlabel_never_3_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_rtl_floatlabel_never_4_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_rtl_floatlabel_never_5_' + themes[i]);
        });

        it('TimePicker_RTL_floatlabel', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_rtl_floatlabel_auto_1_' + themes[i]);
            await element(helper.value_Id).sendKeys("5/5/2018 12:00 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_rtl_floatlabel_auto_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_rtl_floatlabel_auto_3_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_rtl_floatlabel_auto_4_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_rtl_floatlabel_auto_5_' + themes[i]);
        });

        it('TimePicker_RTL_floatlabel', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_rtl_floatlabel_always_1_' + themes[i]);
            await element(helper.value_Id).sendKeys("5/5/2018 12:00 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_rtl_floatlabel_always_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_rtl_floatlabel_always_3_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_rtl_floatlabel_always_4_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_rtl_floatlabel_always_5_' + themes[i]);
        });

        it('TimePicker_RTL_TimeFormat_HH_mm', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'Timepicker_Rtl_Format_HH_mm_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'Timepicker_Rtl_Format_HH_mm_' + themes[i]);
        });

        it('TimePicker_RTL_TimeFormat_HH', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'Timepicker_Rtl_Format_HH_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'Timepicker_Rtl_TimeFormat_HH_' + themes[i]);
        });


        it('TimePicker with RTL and Min', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'Timepicker_Rtl with min_timepopup_' + themes[i]);

        });

        it('TimePicker with RTL and Min_value', async () => {
            browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2032 1:00 AM" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'Timepicker_Rtl_min_value_timepopup_' + themes[i]);
        });

        it('TimePicker with RTL and Min_value*', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2028 6:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_Rtl with min_High_value_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_Rtl with min_High_value_timepopup_' + themes[i]);
        });
        it('TimePicker with RTL and Min_value', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'Timepicker_Rtl_min_value_same_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'Timepicker_Rtl_min_value_same_timepopup_' + themes[i]);
        });

        it('TimePicker with RTL and Max', async () => {
            browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/2/2012 2:00 AM" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'Timepicker_Rtl_max_timepopup_' + themes[i]);
        });

        it('TimePicker with RTL and Max_value', async () => {
            browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 6:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2012 2:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_Rtl_max_input' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_Rtl with max_value_popup_' + themes[i]);
        });
        it('TimePicker with RTL and Max_value*', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 6:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_Rtl max_low_value_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_Rtl with max_low_value_popup_' + themes[i]);
        });

        it('TimePicker with RTL and Max_value', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_Rtl with max_equal_value__input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_Rtl with max_equal_value_popup_' + themes[i]);
        });

        it('TimePicker_rtl_value', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("3/28/1111 7:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_rtl_value_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_rtl_value_popup_' + themes[i]);
        });

        it('TimePicker_rtl_value', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("3/28/9999 11:30 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_rtl_value2_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_rtl_value2_popup_' + themes[i]);
        });

        it('TimePicker_rtl_min_max', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_rtl_min_max_popup_' + themes[i]);
        });

        it('TimePicker_rtl_min_max_same', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_rtl_min_max_same_popup_' + themes[i]);
        });

        it('TimePicker_rtl_min_max_value', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012 7:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_rtl_min_max_value_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_rtl_min_max_value_popup_' + themes[i]);
        });

        it('TimePicker_rtl_min_max_value_same', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_rtl_min_max_value_same_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_rtl_min_max_value_same_popup_' + themes[i]);
        });

        it('TimePicker_rtl_min_max_value*', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("1/12/2012 1:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_rtl_min_max_value2_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_rtl_min_max_value2_popup_' + themes[i]);
        });

        it('TimePicker_rtl_min_max_value*', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("4/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/12/2012 11:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_rtl_min_max_value3_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_rtl_min_max_value3_popup_' + themes[i]);
        });

        it('TimePicker_rtl_min_max_value', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("4/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_rtl_min_max_value4_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_rtl_min_max_value4_popup_' + themes[i]);
        });

        it('TimePicker_rtl_min_max_value', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("4/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/22/2012 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_rtl_min_max_value5_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_rtl_min_max_value5_popup_' + themes[i]);
        });

        it('TimePicker_rtl_min_high_max*', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/2/2012 10:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/22/2012 3:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_rtl_min_high_max_input_' + themes[i]);
        });

        it('TimePicker with RTL and Min_value_strict', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2028 6:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_Rtl with min_High_value_strict_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_Rtl with min_High_value_strict_timepopup_' + themes[i]);
        });

        it('TimePicker_rtl_min_max_value_strict', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("1/12/2012 1:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_rtl_min_max_value2_strict_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_rtl_min_max_value2_strict_popup_' + themes[i]);
        });

        it('TimePicker_rtl_min_max_value_strict', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("4/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/12/2012 11:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_rtl_min_max_value3_strict_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_rtl_min_max_value3_strict_popup_' + themes[i]);
        });
        it('TimePicker with RTL and Max_value_strict', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 6:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_Rtl max_low_value_strict_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_Rtl with max_low_value_strict_popup_' + themes[i]);
        });

        it('TimePicker with RTL and step', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click(); await element(helper.step_Id).clear();
            await element(helper.step_Id).sendKeys("120" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_Rtl with step1_popup_' + themes[i]);
        });

        it('TimePicker with RTL and step', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click(); await element(helper.step_Id).clear();
            await element(helper.step_Id).sendKeys("360" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_Rtl with step2_popup_' + themes[i]);
        });

        it('TimePicker with RTL and step', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click(); await element(helper.step_Id).clear();
            await element(helper.step_Id).sendKeys("3600" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_Rtl with step3_popup_' + themes[i]);
        });

        it('TimePicker with RTL and step_value', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click(); await element(helper.step_Id).clear();
            await element(helper.step_Id).sendKeys("120" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039 11:30 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_Rtl with_step1_value_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_Rtl with_step1_value_popup_' + themes[i]);
        });

        it('TimePicker with RTL and step_value', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.step_Id).clear();
            await element(helper.step_Id).sendKeys("360" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039 11:30 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_Rtl with_step2_value_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_Rtl with_step2_value_popup_' + themes[i]);
        });

        it('TimePicker with RTL and scrollTo', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.scrollTo_Id).sendKeys("3/28/2039 11:30 PM" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_Rtl with scrollTo1_popup_' + themes[i]);
        });

        it('TimePicker with RTL and scrollTo', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.scrollTo_Id).sendKeys("3/28/2039 1:00 PM" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_Rtl with scrollTo2_popup_' + themes[i]);
        });

        it('TimePicker with RTL and width', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.width_Id).clear();
            await element(helper.width_Id).sendKeys("400" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_Rtl with_width_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_Rtl with_width_popup_' + themes[i]);
        });

        it('TimePicker with RTL and placeholer', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click(); await element(helper.placeholder_Id).clear();
            await element(helper.placeholder_Id).sendKeys("Seleact a pick time" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_Rtl with_placeholder_input_' + themes[i]);
        });

        it('TimePicker with RTL and focus', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("3/28/2039 11:30 PM" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_Rtl with_focus_input_' + themes[i]);
        });
        it('TimePicker with RTL and focusout', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("3/28/2039 11:30 PM" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_Rtl with_focusout_input_' + themes[i]);
        });
        it('TimePicker with RTL and show', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("3/28/2039 11:30 PM" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_Rtl with_focus_input_' + themes[i]);
        });

        it('TimePicker with disable', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.enable_Id).click();
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_disable_input_' + themes[i]);
        });

        it('TimePicker with disable with value', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.enable_Id).click();
            await element(helper.value_Id).sendKeys("3/28/2039 11:30 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_disable_value_input' + themes[i]);
        });

        it('TimePicker with disable_show', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.enable_Id).click();
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_disable_show_input_' + themes[i]);
        });

        it('TimePicker with disable_focus', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.enable_Id).click();
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_disable_focus_input_' + themes[i]);
        });

        it('TimePicker with read', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.read_Id).click();
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_read_input_' + themes[i]);
        });

        it('TimePicker with read_and_value', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.read_Id).click();
            await element(helper.value_Id).sendKeys("3/28/2039 11:30 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_read_value_input_' + themes[i]);
        });

        it('TimePicker with read_focus', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.read_Id).click();
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_read_focus_input_' + themes[i]);
        });

        it('TimePicker with read_focusOut', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.read_Id).click();
            await element(helper.focusIn_Id).click();
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_read_blur_input_' + themes[i]);
        });

        it('TimePicker with read_show', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.read_Id).click();
            await element(helper.value_Id).sendKeys("3/28/2039 11:30 PM" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_read_show_input_' + themes[i]);
        });

        it('TimePicker with clear', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.clear_Id).click();
            await element(helper.value_Id).sendKeys("3/28/2039 11:30 PM" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_clear_input_' + themes[i]);
        });

        it('TimePicker_clear_floatlabel', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.clear_Id).click();
            await element(helper.floatLabel_Id).sendKeys(Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_clear_floatlabel_never_1_' + themes[i]);
            await element(helper.value_Id).sendKeys("5/5/2018 12:00 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_clear_floatlabel_never_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_clear_floatlabel_never_3_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_clear_floatlabel_never_5_' + themes[i]);
        });

        it('TimePicker_clear_floatlabel', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.clear_Id).click();
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_clear_floatlabel_auto_1_' + themes[i]);
            await element(helper.value_Id).sendKeys("5/5/2018 12:00 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_clear_floatlabel_auto_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_clear_floatlabel_auto_3_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_clear_floatlabel_auto_5_' + themes[i]);
        });

        it('TimePicker_clear_floatlabel', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.clear_Id).click();
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_clear_floatlabel_always_1_' + themes[i]);
            await element(helper.value_Id).sendKeys("5/5/2018 12:00 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_clear_floatlabel_always_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_clear_floatlabel_always_3_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_clear_floatlabel_always_5_' + themes[i]);
        });
        it('TimePicker with clear_with_focus', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.clear_Id).click();
            await element(helper.value_Id).sendKeys("3/28/2039 11:30 PM" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_clear_focus_input_' + themes[i]);
        });

        it('TimePicker with Min_value_strict', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2028 6:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_with min_High_value_strict_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_with min_High_value_strict_timepopup_' + themes[i]);
        });

        it('TimePicker_min_max_value_strict', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("1/12/2012 1:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_min_max_value2_strict_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_min_max_value2_strict_popup_' + themes[i]);
        });

        it('TimePicker_min_max_value_strict', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("4/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/12/2012 11:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_min_max_value3_strict_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_min_max_value3_strict_popup_' + themes[i]);
        });
        it('TimePicker with Max_value_strict', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 6:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_max_low_value_strict_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_with max_low_value_strict_popup_' + themes[i]);
        });

        it('TimePicker with min_high_Max_strict', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 11:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012 3:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_min_high_Max_strict_input_' + themes[i]);
        });

        it('TimePicker_floatlabel', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.floatLabel_Id).sendKeys(Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_floatlabel_never_1_' + themes[i]);
            await element(helper.value_Id).sendKeys("5/5/2018 12:00 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_floatlabel_never_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_floatlabel_never_3_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_floatlabel_never_4_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_floatlabel_never_5_' + themes[i]);
        });

        it('TimePicker_floatlabel', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_floatlabel_auto_1_' + themes[i]);
            await element(helper.value_Id).sendKeys("5/5/2018 12:00 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_floatlabel_auto_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_floatlabel_auto_3_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_floatlabel_auto_4_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_floatlabel_auto_5_' + themes[i]);
        });

        it('TimePicker_floatlabel', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_floatlabel_always_1_' + themes[i]);
            await element(helper.value_Id).sendKeys("5/5/2018 12:00 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_floatlabel_always_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_floatlabel_always_3_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_floatlabel_always_4_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_floatlabel_always_5_' + themes[i]);
        });
        it('TimePicker_Format_HH_mm', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'Timepicker_Format_HH_mm_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'Timepicker_Format_HH_mm_' + themes[i]);
        });

        it('TimePicker_Format_HH', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'Timepicker_Format_HH_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'Timepicker_Format_HH_' + themes[i]);
        });
        it('TimePicker with Min', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'Timepicker_min_timepopup_' + themes[i]);

        });

        it('TimePicker with Min_value', async () => {
            browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2032 1:00 AM" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'Timepicker_min_value_timepopup_' + themes[i]);
        });

        it('TimePicker with Min_value*', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2028 6:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_with min_High_value_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_with min_High_value_timepopup_' + themes[i]);
        });
        it('TimePicker with Min_value', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2030 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'Timepicker_min_value_same_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'Timepicker_min_value_same_timepopup_' + themes[i]);
        });

        it('TimePicker with Max', async () => {
            browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/2/2012 2:00 AM" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'Timepicker_max_timepopup_' + themes[i]);
        });

        it('TimePicker Max_value', async () => {
            browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 6:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2012 2:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_max_input' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_ with max_value_popup_' + themes[i]);
        });
        it('TimePicker with Max_value*', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 6:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_max_low_value_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_with max_low_value_popup_' + themes[i]);
        });

        it('TimePicker Max_value', async () => {
            await browser.get(browser.basePath + '/demos/timePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_with max_equal_value__input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_with max_equal_value_popup_' + themes[i]);
        });

        it('TimePicker_value', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("3/28/1111 7:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_value_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_value_popup_' + themes[i]);
        });

        it('TimePicker_value', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("3/28/9999 11:30 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_value2_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_value2_popup_' + themes[i]);
        });

        it('TimePicker_min_max', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_min_max_popup_' + themes[i]);
        });

        it('TimePicker_min_max_same', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_min_max_same_popup_' + themes[i]);
        });

        it('TimePicker_min_max_value', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012 7:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_min_max_value_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_min_max_value_popup_' + themes[i]);
        });

        it('TimePicker_min_max_value_same', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012 3:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_min_max_value_same_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_min_max_value_same_popup_' + themes[i]);
        });

        it('TimePicker_min_max_value*', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("1/12/2012 1:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_min_max_value2_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_min_max_value2_popup_' + themes[i]);
        });

        it('TimePicker_min_max_value*', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("4/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/12/2012 11:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_min_max_value3_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_min_max_value3_popup_' + themes[i]);
        });

        it('TimePicker_min_max_value', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("4/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_min_max_value4_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_min_max_value4_popup_' + themes[i]);
        });

        it('TimePicker_min_max_value', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012 3:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("4/22/2012 10:00 AM" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/22/2012 10:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_min_max_value5_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_min_max_value5_popup_' + themes[i]);
        });

        it('TimePicker_min_high_max*', async () => {
            await browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/2/2012 10:00 AM" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/22/2012 3:00 AM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_min_high_max_input_' + themes[i]);
        });
        it('TimePicker and step', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.step_Id).clear();
            await element(helper.step_Id).sendKeys("120" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_with step1_popup_' + themes[i]);
        });

        it('TimePicker and step', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.step_Id).clear();
            await element(helper.step_Id).sendKeys("360" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_with step2_popup_' + themes[i]);
        });

        it('TimePicker and step', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.step_Id).clear();
            await element(helper.step_Id).sendKeys("3600" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_step3_popup_' + themes[i]);
        });

        it('TimePicker with step_value', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.step_Id).clear();
            await element(helper.step_Id).sendKeys("120" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039 11:30 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_with_step1_value_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_with_step1_value_popup_' + themes[i]);
        });

        it('TimePicker with step_value', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.step_Id).clear();
            await element(helper.step_Id).sendKeys("360" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039 11:30 PM" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_with_step2_value_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_with_step2_value_popup_' + themes[i]);
        });

        it('TimePicker with scrollTo', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.scrollTo_Id).sendKeys("3/28/2039 11:30 PM" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_with scrollTo1_popup_' + themes[i]);
        });

        it('TimePicker with scrollTo', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.scrollTo_Id).sendKeys("3/28/2039 1:00 PM" + Key.ENTER);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_with scrollTo2_popup_' + themes[i]);
        });

        it('TimePicker with width', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.width_Id).clear();
            await element(helper.width_Id).sendKeys("400" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_Rtl with_width_input_' + themes[i]);
            await element(helper.timePickerIcon_ClassName).click();
            browser.compareScreen(element(By.id('time_popup')), 'TimePicker_with_width_popup_' + themes[i]);
        });

        it('TimePicker with placeholer', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.placeholder_Id).clear();
            await element(helper.placeholder_Id).sendKeys("Seleact a pick time" + Key.ENTER);
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_with_placeholder_input_' + themes[i]);
        });

        it('TimePicker with focus', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("3/28/2039 11:30 PM" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'TimePicker_with_focus_input_' + themes[i]);
        });
        it('TimePicker with focusout', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("3/28/2039 11:30 PM" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_with_focusout_input_' + themes[i]);
        });
        it('TimePicker with show', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("3/28/2039 11:30 PM" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_with_show_input_' + themes[i]);
        });

        it('TimePicker with show_hide', async () => {
            browser.get(browser.basePath + '/demos/TimePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("3/28/2039 11:30 PM" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_with_show_hide_input_' + themes[i]);
            await element(helper.hide_Id).click();
            browser.compareScreen(element(By.className('e-time-wrapper')), 'TimePicker_with_hide_input_' + themes[i]);
        });

    }
});