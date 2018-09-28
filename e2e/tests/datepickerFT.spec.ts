import { browser, element, Key, By, by, protractor } from "@syncfusion/ej2-base/e2e/index";
import { Helper } from "./Helper/DatePickerHelper";
import { Property, queryParams } from "@syncfusion/ej2-base";

var helper: Helper = new Helper();

//var event = new Event('change');
let themes: String[] = ["material"];
//let themes: String[] = ["material", "fabric", "bootstrap", "highcontrast"];
describe('DatePicker', function () {
    for (let i = 0; i < themes.length; i++) {
        let fileName: string = 'https://cdn.syncfusion.com/ej2/' + themes[i] + '.css';
        it('Default DatePicker - case 1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_default_input_' + themes[i]);
        });
        it('Default DatePicker - case 2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_default_popup_' + themes[i]);
        });
        it('DatePicker with RTL - case 1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_popup_' + themes[i]);

        });
        it('DatePicker with RTL - case 2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_input_' + themes[i]);
        });
        it('DatePicker with RTL and TodayButton', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.today_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_Today_input_' + themes[i]);
        });

        it('DatePicker with RTL and week', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_Week_popup_' + themes[i]);
        });
        it('DatePicker with RTL and disable', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.enable_Id).click();
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_disable_input_' + themes[i]);
        });
        it('DatePicker with RTL and clearButton', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.clear_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_clear_input_' + themes[i]);
        });

        it('DatePicker with RTL and readonly', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.read_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.value_Id).clear();
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_with_readonly_' + themes[i]);

        });

        it('DatePicker with_Rtl_readonly_show', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.read_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_readonly_show_input_' + themes[i]);
        });

        it('DatePicker with_Rtl_readonly_focus', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.read_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'Datepicker_Rtl_readonly_focus_input_' + themes[i]);
        });

        it('DatePicker with RTL and Start_Year', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_start_year_' + themes[i]);
        });

        it('DatePicker with RTL and Start_Decade', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_start_decade_' + themes[i]);
        });

        it('DatePicker with RTL and Firstday', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_firstday_2_' + themes[i]);

        });

        it('DatePicker with RTL and Firstday', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_firstday_3_' + themes[i]);

        });

        it('DatePicker with RTL and Firstday', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl with firstday_4_' + themes[i]);
        });

        it('DatePicker with RTL and Firstday', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl with firstday_5_' + themes[i]);
        });

        it('DatePicker with RTL and Firstday', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl with firstday_6_' + themes[i]);
        });

        it('DatePicker with RTL and Firstday', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.floatLabel_Id).sendKeys("16" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl with firstday_outof_' + themes[i]);
        });

        // it('DatePicker with RTL and Floatlabel',  async () => {
        //     browser.get(browser.basePath + '/demos/datePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     let bgWidth: string = "(document.getElementsByClassName('content-wrapper')[0]).setAttribute('style', 'width: 248px')";
        //     browser.executeScript(bgWidth);
        //     browser.executeScript(path);
        //         element(helper.rtl_Id).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl with floatLabel_never_' + themes[i]);
        //         element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
        //         element(helper.pickerIcon_ClassName).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl with floatLabel_never_value_' + themes[i]);
        //         element(helper.clearIcon_ClassName).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl with floatLabel_never_icon_' + themes[i]);
        //         element(helper.focusOut_Id).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl with floatLabel_never_focusOut_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DatePicker with RTL and Floatlabel',  async () => {
        //     browser.get(browser.basePath + '/demos/datePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     let bgWidth: string = "(document.getElementsByClassName('content-wrapper')[0]).setAttribute('style', 'width: 248px')";
        //     browser.executeScript(bgWidth);
        //     browser.executeScript(path);
        //         element(helper.rtl_Id).click();
        //         element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl with floatLabel_auto_' + themes[i]);
        //         element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
        //         element(helper.pickerIcon_ClassName).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl with floatLabel_auto_value_' + themes[i]);
        //         element(helper.clearIcon_ClassName).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl with floatLabel_auto_icon_' + themes[i]);
        //         element(helper.focusOut_Id).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl with floatLabel_auto_focusOut_' + themes[i]);
        //         done();
        //     });
        // });

        // it('DatePicker with RTL and Floatlabel',  async () => {
        //     browser.get(browser.basePath + '/demos/datePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     let bgWidth: string = "(document.getElementsByClassName('content-wrapper')[0]).setAttribute('style', 'width: 248px')";
        //     browser.executeScript(bgWidth);
        //     browser.executeScript(path);
        //         element(helper.rtl_Id).click();
        //         element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
        //         element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_floatLabel_always_' + themes[i]);
        //         element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
        //         element(helper.pickerIcon_ClassName).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_floatLabel_always_' + themes[i]);
        //         element(helper.clearIcon_ClassName).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_floatLabel_always_icon_' + themes[i]);
        //         element(helper.focusOut_Id).click();
        //         browser.sleep(2000);
        //         browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_floatLabel_always_focusOut_' + themes[i]);
        //         done();
        //     });
        // });

        it('DatePicker with RTL and Format', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_format_dd_MMM_yy_' + themes[i]);
        });

        it('DatePicker with RTL and Format', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_format_yy_MMMM_dd_' + themes[i]);
        });
        it('DatePicker with RTL and Format', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_format_dd_MMMM_' + themes[i]);
        });

        it('DatePicker with RTL and Min', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2039" + Key.ENTER);
            element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_min_' + themes[i]);
        });

        it('DatePicker with RTL and Min_value - case 1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_min_value_input_' + themes[i]);
        });
        it('DatePicker with RTL and Min_value - case 2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_min_value_popup_' + themes[i]);
        });
        it('DatePicker with RTL and Min_value* - case 1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_min_High_value_input_' + themes[i]);
        });

        it('DatePicker with RTL and Min_value* - case 2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_min_High_value_popup_' + themes[i]);
        });

        it('DatePicker with RTL and Min_value - case 1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_min_equal_value_input_' + themes[i]);
        });

        it('DatePicker with RTL and Min_value - case 2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_min_equal_value_popup_' + themes[i]);
        });

        it('DatePicker with RTL and Max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.sleep(2000);
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_max_' + themes[i]);

        });

        it('DatePicker with RTL and Max_value - case 1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2012" + Key.ENTER);
            await browser.sleep(20000);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_max_value_input_' + themes[i]);
        });

        it('DatePicker with RTL and Max_value - case 2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_max_value_output_' + themes[i]);

        });

        it('DatePicker with RTL and Max_value* - case 1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_max_High_low_input_' + themes[i]);
        });

        it('DatePicker with RTL and Max_value* - case 2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_max_low_value_popup_' + themes[i]);

        });

        it('DatePicker with RTL and Max_value - case 1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_max_equal_value_input' + themes[i]);
        });

        it('DatePicker with RTL and Max_value - case 2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_max_equal_value_popup_' + themes[i]);

        });


        it('DatePicker with RTL and value_1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            await browser.sleep(20000);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_minvalue_input_' + themes[i]);
        });

        it('DatePicker with RTL and value_2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_minvalue_popup_' + themes[i]);

        });

        it('DatePicker with RTL and value_3', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            await browser.sleep(20000);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_maxvalue_input_' + themes[i]);

        });

        it('DatePicker with RTL and value_4', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_maxvalue_popup_' + themes[i]);

        });

        it('DatePicker with RTL and min_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_min_max_' + themes[i]);

        });

        it('DatePicker with RTL and min_max - case 1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_min_max_value_input_' + themes[i]);

        });

        it('DatePicker with RTL and min_max - case 2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_min_max_value_popup_' + themes[i]);

        });

        it('DatePicker with RTL and min_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_min_max_same_popup_' + themes[i]);
        });

        it('DatePicker with RTL and min_max_value case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_min_max_value_same_input_' + themes[i]);
        });

        it('DatePicker with RTL and min_max_value case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_min_max_value_same_popup_' + themes[i]);

        });

        it('DatePicker with RTL and min_high_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/12/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_min_high_max_popup' + themes[i]);

        });
        it('DatePicker with RTL and width', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.width_Id).clear();
            await element(helper.width_Id).sendKeys("450" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_width_input_' + themes[i]);

        });
        it('DatePicker with RTL and width', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.width_Id).clear();
            await element(helper.width_Id).sendKeys("450" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_width_value_popup_' + themes[i]);

        });
        it('DatePicker with RTL and Strictmode', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_strictmode_input_' + themes[i]);

        });

        it('DatePicker with RTL and Strictmode case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_strictmode_popup_' + themes[i]);

        });

        it('DatePicker with RTL and strictmode1 case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_strictmode2_input_' + themes[i]);
        });

        it('DatePicker with RTL and strictmode case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_strictmode2_popup_' + themes[i]);

        });

        it('DatePicker with RTL_strictmode case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_max_High_low_strict_input_' + themes[i]);

        });

        it('DatePicker with RTL_strictmode case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_max_low_value_strict_popup_' + themes[i]);

        });


        it('DatePicker with RTL_strictmode case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_min_High_value_input_strict_' + themes[i]);
        });

        it('DatePicker with RTL_strictmode case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_min_High_value_strict_popup_' + themes[i]);

        });

        it('DatePicker with RTL and Placeholder', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.placeholder_Id).clear();
            await element(helper.placeholder_Id).sendKeys("Select your Date of Birth" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_placeholder_input_' + themes[i]);

        });
        it('DatePicker with RTL and show', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_Rtl_show_' + themes[i]);

        });
        it('DatePicker with RTL and focusIn', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'Datepicker_Rtl_with_focusIn_' + themes[i]);

        });
        it('DatePicker with RTL and value focusIn', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DatePicker with RTL and value focusIn_1_' + themes[i]);

        });

        it('DatePicker with RTL and focusOut', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.focusIn_Id).click();
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_with_focusOut_' + themes[i]);
        });

        it('DatePicker with TodayButton', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_input_' + themes[i]);

        });

        it('DatePicker with TodayButton_week', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();

            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_week_popup_' + themes[i]);

        });

        it('DatePicker with Today and Firstday', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_firstday_2_input_' + themes[i]);

        });

        it('DatePicker with Today and Firstday', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_firstday_3_input_' + themes[i]);

        });

        it('DatePicker with Today and Firstday', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();

            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_firstday_4_input_' + themes[i]);

        });

        it('DatePicker with Today and Firstday', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_firstday_5_input_' + themes[i]);

        });

        it('DatePicker with Today and Firstday', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_firstday_6_input_' + themes[i]);

        });

        it('DatePicker with today and Format', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_today_format_dd_MMM_yy_input_' + themes[i]);

        });

        it('DatePicker with today and Format', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_today_format_yy_MMMM_dd_input_' + themes[i]);

        });

        it('DatePicker with today and Format', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_today_format_dd_MMMM_input_' + themes[i]);

        });

        it('DatePicker with today and Min', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_with min_' + themes[i]);

        });

        it('DatePicker with today and Min_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_min_value_' + themes[i]);

        });

        it('DatePicker with today and Min_value case-1*', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_today_min_High_value_input_' + themes[i]);

        });

        it('DatePicker with today and Min_value case-2*', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_with min_High_value_popup_' + themes[i]);

        });

        it('DatePicker with today and Min_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_with min_equal_value_' + themes[i]);

        });


        it('DatePicker with today and Max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_with max_' + themes[i]);

        });

        it('DatePicker with today and Max_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_max_value_' + themes[i]);

        });

        it('DatePicker with today and Max_value case-1*', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_today_max_High_low_input_' + themes[i]);

        });

        it('DatePicker with today and Max_value case-2*', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_max_low_value_popup' + themes[i]);

        });

        it('DatePicker with today and Max_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_max_equal_value_popup_' + themes[i]);

        });

        it('DatePicker with today and value case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_today_minvalue_input_' + themes[i]);
        });

        it('DatePicker with today and value case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_minvalue_popup' + themes[i]);

        });


        it('DatePicker with today and value case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_today_maxvalue_input_' + themes[i]);
        });

        it('DatePicker with today and value case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_maxvalue_popup_' + themes[i]);

        });

        it('DatePicker with today and min_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_min_max_popup_' + themes[i]);

        });

        it('DatePicker with today and min_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_min_max_value_popup_' + themes[i]);

        });

        it('DatePicker with today and min_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_min_max_same_' + themes[i]);

        });

        it('DatePicker with today and min_max_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_min_max_value_same_' + themes[i]);

        });

        it('DatePicker with today and min_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/12/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_min_high_max_' + themes[i]);

        });
        it('DatePicker with today and Strictmode case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_today_strictmode_input_' + themes[i]);
        });


        it('DatePicker with today and Strictmode case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_strictmode_popup_' + themes[i]);

        });

        it('DatePicker with today and strictmode case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_today_strictmode2_input_' + themes[i]);
        });


        it('DatePicker with today and strictmode case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_strictmode2_popup_' + themes[i]);

        });

        it('DatePicker with today and Max_value case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_today_max_High_low__strict_input_' + themes[i]);

        });

        it('DatePicker with today and Max_value case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_max_low_value_strict_popup_' + themes[i]);

        });

        it('DatePicker with today and Min_value case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_today_min_High_value_input_strict_' + themes[i]);

        });

        it('DatePicker with today and Min_value case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_today_min_High_value_strict_popup_' + themes[i]);

        });

        it('DatePicker with today and width', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.width_Id).clear();
            await element(helper.width_Id).sendKeys("450" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_toady_width_' + themes[i]);

        });
        it('DatePicker with today and show', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.today_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_taday_show_' + themes[i]);

        });

        // WeekNumber

        it('DatePicker with weekNumber and Firstday', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_week_firstday_2_' + themes[i]);
        });
        it('DatePicker with weekNumber and Firstday', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_week_firstday_3_' + themes[i]);
        });
        it('DatePicker with weekNumber and Firstday', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_week_firstday_4_' + themes[i]);

        });
        it('DatePicker with weekNumber and Firstday', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_week_firstday_5_' + themes[i]);

        });

        it('DatePicker with weekNumber and Firstday', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_week_firstday_6_' + themes[i]);


        });

        it('DatePicker with weekNumber and Min', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_min_popup_' + themes[i]);

        });

        it('DatePicker with weekNumber and Min_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2039" + Key.ENTER);
            element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_min_value_popup_' + themes[i]);
        });

        it('DatePicker with weekNumber and Min_value case-1*', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_week_min_High_value_input_' + themes[i]);
        });

        it('DatePicker with weekNumber and Min_value case-2*', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_with min_High_value_popup' + themes[i]);
        });

        it('DatePicker with weekNumber and Min_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_min_equal_value_' + themes[i]);

        });


        it('DatePicker with weekNumber and Max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_with max_popup_' + themes[i]);

        });

        it('DatePicker with weekNumber and Max_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_max_value_' + themes[i]);

        });

        it('DatePicker with weekNumber and Max_value case-1*', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_week_max_High_low_input_' + themes[i]);
        });

        it('DatePicker with weekNumber and Max_value case-2*', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_max_low_value_popup_' + themes[i]);
        });

        it('DatePicker with weekNumber and Max_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();

            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_max_equal_value_' + themes[i]);

        });

        it('DatePicker with weekNumber and value case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_week_with_minvalue_input_' + themes[i]);

        });

        it('DatePicker with weekNumber and value case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_with_minvalue_popup_' + themes[i]);

        });

        it('DatePicker with weekNumber and value case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_week_with_maxvalue_input_' + themes[i]);

        });

        it('DatePicker with weekNumber and value case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_with_maxvalue_popup_' + themes[i]);

        });

        it('DatePicker with weekNumber and min_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_with_min_max_popup_' + themes[i]);

        });

        it('DatePicker with weekNumber and min_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_with_min_max_value_popup_' + themes[i]);

        });

        it('DatePicker with weekNumber and min_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_with_min_max_same_popup_' + themes[i]);

        });

        it('DatePicker with weekNumber and min_max_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_with_min_max_value_same_popup_' + themes[i]);

        });

        it('DatePicker with weekNumber and min_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/12/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_min_high_max_popup_' + themes[i]);

        });
        it('DatePicker with weekNumber and Strictmode case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_week_strictmode_input_' + themes[i]);
        });

        it('DatePicker with weekNumber and Strictmode case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_strictmode_popup_' + themes[i]);

        });

        it('DatePicker with weekNumber and strictmode case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_week_with_strictmode2_input_' + themes[i]);
        });

        it('DatePicker with weekNumber and strictmode case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_with_strictmode2_popup_' + themes[i]);

        });
        it('DatePicker with weekNumber and Max_value case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_week_max_High_low_strict_input_' + themes[i]);
        });

        it('DatePicker with weekNumber and Max_value case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_max_low_value_strict_popup_' + themes[i]);

        });

        it('DatePicker with weekNumber and Min_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_week_min_High_value_input_strict_' + themes[i]);

        });

        it('DatePicker with weekNumber and Min_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_min_High_value_strict_popup_' + themes[i]);
        });

        it('DatePicker with weekNumber and width', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.width_Id).clear();
            await element(helper.width_Id).sendKeys("450" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_week_width_' + themes[i]);

        });
        it('DatePicker with weekNumber and show', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_week_show_' + themes[i]);

        });


        it('DatePicker with disable', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.enable_Id).click();
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_disable_' + themes[i]);
        });

        it('DatePicker with disable with value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.enable_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_disable_value_' + themes[i]);

        });

        it('DatePicker with disable with show', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.enable_Id).click();
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_disable_show_' + themes[i]);

        });

        it('DatePicker with disable with focus', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.enable_Id).click();
            await element(helper.focusIn_Id).click();
            await browser.sleep(20000);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_disable_focus_' + themes[i]);

        });

        it('DatePicker with clearButton', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.clear_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            await browser.sleep(20000);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_Rtl_clear_' + themes[i]);

        });

        it('DatePicker with clearButton_focus', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.clear_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'Datepicker_clear_value_' + themes[i]);

        });
        it('DatePicker with_readonly', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.read_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_readonly_' + themes[i]);

        });

        it('DatePicker with_readonly_show', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.read_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_readonly_show_' + themes[i]);

        });

        it('DatePicker with_readonly_focus', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.read_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'Datepicker_readonly_show_' + themes[i]);

        });

        it('DatePicker with_Start_Year_rtl', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2017" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_Start_Year_rtl_' + themes[i]);

        });

        it('DatePicker with_Start_Year_today', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.today_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2017" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_Start_Year_today_' + themes[i]);

        });

        it('DatePicker with_Start_Year_clear', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.clear_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2017" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DatePicker_Start_Year_clear_' + themes[i]);

        });

        // min max 

        it('DatePicker with_start_year_Min', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/2/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_year_min_' + themes[i]);

        });

        it('DatePicker with_start_year_min_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("4/2/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("8/22/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_year_min_value_' + themes[i]);

        });

        it('DatePicker with_start_year_Min_value case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_start_year_min_High_value_input_' + themes[i]);
        });

        it('DatePicker with_start_year_Min_value case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_year_min_High_value_popup_' + themes[i]);

        });

        it('DatePicker with_start_year_min_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/12/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/22/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_year_min_equal_value_' + themes[i]);

        });

        it('DatePicker with_start_year_Max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_year_max_' + themes[i]);

        });

        it('DatePicker with_start_year_Max_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("12/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_year_max_value_popup_' + themes[i]);
        });

        it('DatePicker with_start_year_Max_value case-1*', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("12/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2013" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_start_year_max_High_low_input_' + themes[i]);
        });

        it('DatePicker with_start_year_Max_value case-2*', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("12/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2013" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_year_max_low_value_popup_' + themes[i]);

        });

        it('DatePicker with_start_year_Max_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("5/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_year_max_equal_value_' + themes[i]);

        });

        it('DatePicker with_start_year_value case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'datepicker_start_year_minvalue_input_' + themes[i]);

        });

        it('DatePicker with_start_year_value case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'datepicker_start_year_minvalue_popup' + themes[i]);

        });

        it('DatePicker with_start_year_value case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_start_year_value2_input_' + themes[i]);

        });

        it('DatePicker with_start_year_value case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_year_value2_popup_' + themes[i]);
        });

        it('Datepicker_start_year_with_min_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("10/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_year_with_min_max_' + themes[i]);

        });

        it('Datepicker_start_year_with_min_max_value_same', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/2/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("5/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/12/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_year_with_min_max_value_same_' + themes[i]);

        });

        it('Datepicker_start_year_with_min_max_same', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("4/22/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("4/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_year_with_min_max_same_' + themes[i]);

        });

        it('Datepicker_start_year_with_min_high_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/22/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/12/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_year_with_min_high_max_' + themes[i]);

        });

        it('DatePicker_with_start_year_and_width case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.width_Id).clear();
            await element(helper.width_Id).sendKeys("450" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'DatePicker_with_start_year_and_width_input_' + themes[i]);
        });

        it('DatePicker_with_start_year_and_width case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.width_Id).clear();
            await element(helper.width_Id).sendKeys("450" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_with_start_year_and_width_popup_' + themes[i]);
        });

        it('DatePicker_start_year_Strictmode case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'DatePicker_start_year_Strictmode_input_' + themes[i]);

        });

        it('DatePicker_start_year_Strictmode case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_start_year_Strictmode_popup_' + themes[i]);
        });
        it('DatePicker_start_year_Strictmode case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'DatePicker_start_year_Strictmode2_input_' + themes[i]);

        });
        it('DatePicker_start_year_Strictmode case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_start_year_Strictmode2_popup_' + themes[i]);

        });

        it('DatePicker_start_year_Max_value_strict case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2014" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'DatePicker_start_year_Max_value_strict_input_' + themes[i]);

        });

        it('DatePicker_start_year_Max_value_strict case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2014" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_start_year_Max_value_strict_popup' + themes[i]);

        });

        it('DatePicker_start_year_Min_value case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("12/12/2032" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'DatePicker_start_year_min_High_value_input_strict_' + themes[i]);

        });
        it('DatePicker_start_year_Min_value case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("12/12/2032" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_start_year_min_High_value_strict_popup_' + themes[i]);

        });
        it('DatePicker_start_year_and_show', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_start_year_and_show_popup_' + themes[i]);

        });

        // // start_depth 

        it('DatePicker with_start_decade_rtl', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2017" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_start_decade_rtl_popup_' + themes[i]);

        });

        it('DatePicker with_start_decade_today', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.today_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2017" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_start_decade_today_' + themes[i]);

        });

        it('DatePicker with_start_decade_clear', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.clear_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2017" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'DatePicker_start_decade_clear_' + themes[i]);

        });

        // min max 

        it('DatePicker with_start_decade_Min', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/2/2035" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_start_decade_Min_' + themes[i]);
        });

        it('DatePicker with_start_decade_min_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("4/2/2035" + Key.ENTER);
            await element(helper.value_Id).sendKeys("8/22/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_decade_min_value_' + themes[i]);

        });

        it('DatePicker with_start_decade_Min_value case-1', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/22/2045" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2035" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_start_decade_min_High_value_input_' + themes[i]);
        });

        it('DatePicker with_start_decade_Min_value case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/22/2045" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2035" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_decade_min_High_value_popup_' + themes[i]);

        });

        it('DatePicker with_start_decade_min_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/12/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/22/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_decade_min_equal_value_' + themes[i]);

        });


        it('DatePicker with_start_decade_Max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_decde_with max_' + themes[i]);

        });

        it('DatePicker with_start_decade_Max_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("12/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2008" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_decade_max_value_' + themes[i]);

        });

        it('DatePicker with_start_decade_Max_value*', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("12/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_start_decade_max_High_low_input_' + themes[i]);

        });

        it('DatePicker with_start_decade_Max_value*', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("12/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_decade_max_low_value_popup' + themes[i]);
        });

        it('DatePicker with_start_decade_Max_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("5/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_decade_max_equal_value_' + themes[i]);

        });

        it('DatePicker with_start_decade_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_decade_minvalue_' + themes[i]);

        });

        it('DatePicker with_start_decade_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_decade_maxvalue_' + themes[i]);

        });

        it('Datepicker_start_decade_with_min_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("10/22/2016" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_decade_with_min_max_popup_' + themes[i]);

        });

        it('Datepicker_start_decade_with_min_max_value_same', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/2/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("5/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/12/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_decade_with_min_max_value_same_' + themes[i]);

        });

        it('Datepicker_start_decade_with_min_max_same', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("4/22/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("4/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_decade_with_min_max_same_' + themes[i]);

        });

        it('Datepicker_start_decade_with_min_high_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/22/2016" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/12/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_start_decade_with_min_high_max_' + themes[i]);

        });

        it('DatePicker_with_start_decade_and_width', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.width_Id).clear();
            await element(helper.width_Id).sendKeys("450" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'DatePicker_start_decade_and_width_1_' + themes[i]);

        });

        it('DatePicker_with_start_decade_and_width case-2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.width_Id).clear();
            await element(helper.width_Id).sendKeys("450" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            await browser.sleep(20000);
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_start_decade_and_width_2_' + themes[i]);

        });

        it('DatePicker_start_decade_Strictmode', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_start_decade_Strictmode_popup_' + themes[i]);

        });

        it('DatePicker_start_decade_Strictmode', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_start_decade_Strictmode2_popup_' + themes[i]);

        });

        it('DatePicker_start_decade_Max_value_strict', async () => {
            browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.max_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_start_decade_Max_value_strict_popup_' + themes[i]);

        });

        it('DatePicker_start_decade_Min_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            await browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.min_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).sendKeys("2/22/2035" + Key.ENTER);
            await element(helper.value_Id).sendKeys("12/12/2025" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_start_decade_min_High_value_strict_popup_' + themes[i]);

        });
        it('DatePicker_start_decade_and_show', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_start_decade_and_show_' + themes[i]);
        });

        it('DatePicker firstday_Min', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_firstyday_min_' + themes[i]);

        });
        it('DatePicker firstday_Max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_firstday_max_' + themes[i]);

        });

        it('DatePicker firstday_min_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_firstday_min_max_1_' + themes[i]);

        });

        it('DatePicker firstday_min_max_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_firstday_min_max_2_' + themes[i]);

        });
        // it('DatePicker with Floatlabel', async () => {
        //     browser.get(browser.basePath + '/demos/datePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     let bgWidth: string = "(document.getElementsByClassName('content-wrapper')[0]).setAttribute('style', 'width: 248px')";
        //     browser.executeScript(bgWidth);
        //     browser.executeScript(path);
        //     browser.sleep(2000);
        //     browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_floatLabel_never_' + themes[i]);
        //     element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
        //     element(helper.pickerIcon_ClassName).click();
        //     browser.sleep(2000);
        //     browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_floatLabel_never_value_' + themes[i]);
        //     element(helper.clearIcon_ClassName).click();
        //     browser.sleep(2000);
        //     browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_floatLabel_never_icon_' + themes[i]);
        //     element(helper.focusOut_Id).click();
        //     browser.sleep(2000);
        //     browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_floatLabel_never_focusOut_' + themes[i]);

        // });

        // it('DatePicker with Floatlabel', async () => {
        //     browser.get(browser.basePath + '/demos/datePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     let bgWidth: string = "(document.getElementsByClassName('content-wrapper')[0]).setAttribute('style', 'width: 248px')";
        //     browser.executeScript(bgWidth);
        //     browser.executeScript(path);
        //     element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
        //     browser.sleep(2000);
        //     browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_floatLabel_auto_' + themes[i]);
        //     element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
        //     element(helper.pickerIcon_ClassName).click();
        //     browser.sleep(2000);
        //     browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_floatLabel_auto_value_' + themes[i]);
        //     element(helper.clearIcon_ClassName).click();
        //     browser.sleep(2000);
        //     browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_floatLabel_auto_icon_' + themes[i]);
        //     element(helper.focusOut_Id).click();
        //     browser.sleep(2000);
        //     browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_floatLabel_auto_focusOut_' + themes[i]);

        // });
        // it('DatePicker_with_Floatlabel', async () => {
        //     browser.get(browser.basePath + '/demos/datePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     let bgWidth: string = "(document.getElementsByClassName('content-wrapper')[0]).setAttribute('style', 'width: 248px')";
        //     browser.executeScript(bgWidth);
        //     browser.executeScript(path);
        //     element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
        //     element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
        //     browser.sleep(2000);
        //     browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_floatLabel_always_' + themes[i]);
        //     element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
        //     element(helper.pickerIcon_ClassName).click();
        //     browser.sleep(2000);
        //     browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_floatLabel_always_' + themes[i]);
        //     element(helper.clearIcon_ClassName).click();
        //     browser.sleep(2000);
        //     browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_floatLabel_always_icon_' + themes[i]);
        //     element(helper.focusOut_Id).click();
        //     browser.sleep(2000);
        //     browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_floatLabel_always_focusOut_' + themes[i]);

        // });

        it('DatePicker_with_Format', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'DatePicker_Format_dd_MMM_yy_' + themes[i]);

        });

        it('DatePicker_with_Format', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'DatePicker_Format_yy_MMMM_dd_' + themes[i]);

        });

        it('DatePicker_with_Format', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'DatePicker_Formatt_dd_MMMM_' + themes[i]);

        });

        it('DatePicker_Min', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2039" + Key.ENTER);
            element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_Min_' + themes[i]);

        });

        it('DatePicker_Min_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_Min_value_' + themes[i]);

        });

        it('DatePicker_Min_value*', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_min_High_value_input_' + themes[i]);

        });

        it('DatePicker_Min_value case-2*', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_min_High_value_' + themes[i]);

        });

        it('DatePicker_Min_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_min_equal_value_' + themes[i]);

        });


        it('DatePicker_Max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_with_max_' + themes[i]);

        });

        it('DatePicker_Max_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_max_value_' + themes[i]);

        });

        it('DatePicker_Max_value*', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_max_High_low_input_' + themes[i]);

        });

        it('DatePicker_Max_value case -2*', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_max_low_value_' + themes[i]);
        });

        it('DatePicker_Max_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_max_equal_value_' + themes[i]);
        });

        it('DatePicker_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_with_value1_input_' + themes[i]);
        });
        it('DatePicker_value case -2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_with_value1_popup_' + themes[i]);
        });

        it('DatePicker_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_with_value2_input_' + themes[i]);
        });
        it('DatePicker_value case - 2', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_with_value2_popup_' + themes[i]);
        });
        it('DatePicker_min_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_min_max_' + themes[i]);
        });
        it('DatePicker_min_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/2/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_with_min_max_value_' + themes[i]);
        });
        it('DatePicker_min_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_min_max_same_' + themes[i]);
        });
        it('DatePicker_min_max_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_min_max_value_same_' + themes[i]);
        });
        it('DatePicker_min_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.max_Id).sendKeys("2/12/2012" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_min_high_max_' + themes[i]);
        });
        it('DatePicker_width', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.width_Id).clear();
            await element(helper.width_Id).sendKeys("450" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_with_width_popup_' + themes[i]);
        });
        it('DatePicker_Strictmode', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/1111" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_strictmode_popup' + themes[i]);
        });
        it('DatePicker_strictmode', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("2/22/9999" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_with_strictmode2_popup_' + themes[i]);
        });

        it('DatePicker_Max_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.max_Id).sendKeys("2/22/2012" + Key.ENTER);
            await element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_max_low_value_strict_popup_' + themes[i]);
        });
        it('DatePicker_Min_value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).sendKeys("2/22/2039" + Key.ENTER);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_min_High_value_strict_popup_' + themes[i]);
        });
        it('DatePicker_Placeholder', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.placeholder_Id).clear();
            await element(helper.placeholder_Id).sendKeys("Select your Date of Birth" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_placeholder_input_' + themes[i]);
        });
        it('DatePicker_show_readonly', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.read_Id).click();
            await element(helper.value_Id).sendKeys("2/12/2019" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_show_readonly_' + themes[i]);
        });
        it('DatePicker_show_hide', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("2/12/2019" + Key.ENTER);
            await element(helper.show_Id).click();
            await element(helper.hide_Id).click();
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_show_hide_' + themes[i]);
        });
        it('DatePicker_show_focusOut', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("2/12/2019" + Key.ENTER);
            await element(helper.show_Id).click();
            await element(helper.focusOut_Id).click();
            await browser.sleep(2000);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_show_focusOut_input_' + themes[i]);
        });
        it('DatePicker_show', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Datepicker_show_popup_' + themes[i]);
        });
        it('DatePicker_focusIn', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'Datepicker_focusIn_input_' + themes[i]);
        });
        it('DatePicker_value_focusIn', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'Datepicker_focusIn_value_input_' + themes[i]);
        });
        it('DatePicker_focusOut', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("2/12/2039" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Datepicker_focusOut_input_' + themes[i]);
        });

        it('Navigation prev and next in Calendar control', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'DatePicker_Default_inter_' + themes[i]);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_Navigate_Default_' + themes[i]);
            await element(helper.nextDateIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_Navigate_NextMonth_' + themes[i]);
            element(helper.prevDateIcon_ClassName).click();
            element(helper.prevDateIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_Navigate_PreviousMonth_' + themes[i]);
        });

        it('Navigation year Decade Calendar control', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Navigation year Decade Calendar control1_' + themes[i]);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control2_' + themes[i]);
            await  element(helper.title_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control3_' + themes[i]);
            element(helper.title_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control4_' + themes[i]);
        });

        it('Navigation year Decade Calendar control', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("3/28/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Navigation year Decade Calendar control5_' + themes[i]);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control6_' + themes[i]);
            await  element(helper.title_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control7_' + themes[i]);
            element(helper.title_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control8_' + themes[i]);
        });

        it('Navigation year Decade Calendar control label', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("3/28/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Navigation year Decade Calendar control label1_' + themes[i]);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label2_' + themes[i]);
            expect(element(helper.title_ClassName).getText()).toContain("March 2015");
            await element(helper.title_ClassName).click();
            expect(element(helper.title_ClassName).getText()).toContain("2015");
            await element(helper.title_ClassName).click();
            expect(element(helper.title_ClassName).getText()).toContain("2010 - 2019");
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label4_' + themes[i]);
        });

        it('Navigation year Decade Calendar control label', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("3/28/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Navigation year Decade Calendar control label5_' + themes[i]);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label6_' + themes[i]);
            expect(element(helper.title_ClassName).getText()).toContain("March 2015");
            await element(helper.title_ClassName).click();
            expect(element(helper.title_ClassName).getText()).toContain("2015");
            await element(helper.nextDateIcon_ClassName).click();
            expect(element(helper.title_ClassName).getText()).toContain("2016");
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label7_' + themes[i]);
            await element(helper.title_ClassName).click();
            expect(element(helper.title_ClassName).getText()).toContain("2010 - 2019");
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label8_' + themes[i]);
            await element(helper.nextDateIcon_ClassName).click();
            expect(element(helper.title_ClassName).getText()).toContain("2020 - 2029");
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label9_' + themes[i]);
        });

        it('Navigation year Decade Calendar control label', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("3/28/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-wrapper')), 'Navigation year Decade Calendar control label10_' + themes[i]);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label11_' + themes[i]);
            expect(element(helper.title_ClassName).getText()).toContain("March 2015");
            await element(helper.title_ClassName).click();
            expect(element(helper.title_ClassName).getText()).toContain("2015");
            await element(helper.prevDateIcon_ClassName).click();
            expect(element(helper.title_ClassName).getText()).toContain("2014");
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label12_' + themes[i]);
            await element(helper.title_ClassName).click();
            expect(element(helper.title_ClassName).getText()).toContain("2010 - 2019");
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label13_' + themes[i]);
            await element(helper.prevDateIcon_ClassName).click();
            expect(element(helper.title_ClassName).getText()).toContain("2000 - 2009");
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label14_' + themes[i]);
        });

        it('min_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("3/8/2015" + Key.ENTER);
            await element(helper.max_Id).sendKeys("3/28/2015" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'min_max1_' + themes[i]);
            expect(element(helper.prevDateIcon_ClassName).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.nextDateIcon_ClassName).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.title_ClassName).getText()).toContain("March 2015");
            await element(helper.title_ClassName).click();
            expect(element(helper.title_ClassName).getText()).toContain("2015");
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'min_max2_' + themes[i]);
            await element(helper.title_ClassName).click();
            expect(element(helper.title_ClassName).getText()).toContain("2010 - 2019");
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'min_max3_' + themes[i]);
        });

        it('min_max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("3/8/2015" + Key.ENTER);
            await element(helper.max_Id).sendKeys("3/28/2045" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/4/2019" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'min_max4_' + themes[i]);
            expect(element(helper.title_ClassName).getText()).toContain("April 2019");
            await element(helper.nextDateIcon_ClassName).click();
            expect(element(helper.title_ClassName).getText()).toContain("May 2019");
            element(By.xpath("//div[@class='e-calendar e-control e-keyboard']//div[@class='e-content e-month']//tbody/tr[2]/td[5]")).click();
            browser.sleep(2000);
            browser.compareScreen(element(By.className('content-wrapper')), 'min_max5_' + themes[i]);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'min_max6_' + themes[i]);
        });

        it('Navigate and select value', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("3/8/2015" + Key.ENTER);
            await element(helper.max_Id).sendKeys("3/28/2045" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/4/2019" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value1_' + themes[i]);
            await element(helper.title_ClassName).click();
            await element(helper.title_ClassName).click();
            element(By.xpath("//div[@class='e-calendar e-control e-keyboard']//div[@class='e-content e-decade']//tbody/tr[2]/td[4]")).click();
            browser.sleep(2000);
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value2_' + themes[i]);
            element(By.xpath("//div[@class='e-calendar e-control e-keyboard']//div[@class='e-content e-year']//tbody/tr[2]/td[4]")).click();
            browser.sleep(2000);
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value3_' + themes[i]);
            element(By.xpath("//div[@class='e-calendar e-control e-keyboard']//div[@class='e-content e-month']//tbody/tr[2]/td[4]")).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'value4_' + themes[i]);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value5_' + themes[i]);
        });

        it('Start and Depth', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("4/4/2019" + Key.ENTER);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.depth_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value6_' + themes[i]);
            element(By.xpath("//div[@class='e-calendar e-control e-keyboard']//div[@class='e-content e-decade']//tbody/tr[2]/td[4]")).click();
            browser.sleep(2000);
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value7_' + themes[i]);
            element(By.xpath("//div[@class='e-calendar e-control e-keyboard']//div[@class='e-content e-year']//tbody/tr[2]/td[4]")).click();
            browser.sleep(2000);
            browser.compareScreen(element(By.className('content-wrapper')), 'value8_' + themes[i]);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value9_' + themes[i]);
        });

        it('Start and Depth', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("4/4/2019" + Key.ENTER);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.depth_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value10_' + themes[i]);
            element(By.xpath("//div[@class='e-calendar e-control e-keyboard']//div[@class='e-content e-year']//tbody/tr[2]/td[4]")).click();
            browser.sleep(2000);
            browser.compareScreen(element(By.className('content-wrapper')), 'value11_' + themes[i]);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value12_' + themes[i]);
        });

        it('Start and Depth', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("4/4/2019" + Key.ENTER);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.depth_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.depth_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value13_' + themes[i]);
            element(By.xpath("//div[@class='e-calendar e-control e-keyboard']//div[@class='e-content e-decade']//tbody/tr[2]/td[4]")).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'value14_' + themes[i]);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value15_' + themes[i]);
        });

        it('Start and Depth', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("4/4/2019" + Key.ENTER);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.depth_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.depth_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value16_' + themes[i]);
            await element(helper.nextDateIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value17_' + themes[i]);
        });

        it('Start and Depth', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("12/12/2019" + Key.ENTER);
            await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.depth_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value18_' + themes[i]);
            await element(helper.nextDateIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value19_' + themes[i]);
        });

        it('Max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("4/24/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.sleep(2000);
            expect(element(helper.prevDateIcon_ClassName).getAttribute("aria-disabled")).toContain("false");
            expect(element(helper.nextDateIcon_ClassName).getAttribute("aria-disabled")).toContain("true");
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value_20_' + themes[i]);
        });

        it('Min', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("4/24/2025" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.sleep(2000);
            expect(element(helper.prevDateIcon_ClassName).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.nextDateIcon_ClassName).getAttribute("aria-disabled")).toContain("false");
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value_21_' + themes[i]);
        });

        it('Min with focusdate', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("4/24/2025" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            await element(By.className("e-focused-date")).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'value_22_' + themes[i]);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value_23_' + themes[i]);
        });


        it('Max with focusdate', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("4/24/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            await element(By.className("e-focused-date")).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'value_24_' + themes[i]);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value_25_' + themes[i]);
        });

        it('Min', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("4/24/2025" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value_26_' + themes[i]);
            await element(helper.title_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value_27_' + themes[i]);
            await element(helper.title_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value_28_' + themes[i]);
        });

        it('Max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("4/24/2018" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value_29_' + themes[i]);
            await element(helper.title_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value_30_' + themes[i]);
            await element(helper.title_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value_31_' + themes[i]);
        });

         it('Min', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("4/24/2099" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value_32_' + themes[i]);
            await element(helper.title_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value_33_' + themes[i]);
            await element(helper.title_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value_34_' + themes[i]);
            expect(element(helper.prevDateIcon_ClassName).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.nextDateIcon_ClassName).getAttribute("aria-disabled")).toContain("true");
        });

        it('Max', async () => {
            await browser.get(browser.basePath + '/demos/datePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("4/24/1900" + Key.ENTER);
            await element(helper.pickerIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value_35_' + themes[i]);
            await element(helper.title_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value_36_' + themes[i]);
            await element(helper.title_ClassName).click();
            browser.compareScreen(element(By.className('e-popup-wrapper')), 'value_37_' + themes[i]);
            expect(element(helper.prevDateIcon_ClassName).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.nextDateIcon_ClassName).getAttribute("aria-disabled")).toContain("true");
        });

        // mobile

        // it('Navigation prev and next in Calendar control', async () => {
        //     browser.driver.manage().window().setSize(450, 800);
        //     await browser.get(browser.basePath + '/demos/datePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path);
        //     await element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
        //     browser.executeScript('window.scrollTo(' + 0 + ', ' + -250 + ');');
        //     browser.compareScreen(element(By.className('e-date-wrapper')), 'DatePicker_Default_inter_mobile_' + themes[i]);
        //     await element(helper.pickerIcon_ClassName).click();
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_Navigate_Default_mobile_' + themes[i]);
        //     await element(helper.nextDateIcon_ClassName).click();
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_Navigate_NextMonth_mobile_' + themes[i]);
        //     element(helper.prevDateIcon_ClassName).click();
        //     element(helper.prevDateIcon_ClassName).click();
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'DatePicker_Navigate_PreviousMonth_mobile_' + themes[i]);
        // });

        // it('Navigation year Decade Calendar control', async () => {
        //     browser.driver.manage().window().setSize(450, 800);
        //     await browser.get(browser.basePath + '/demos/datePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path);
        //     await element(helper.value_Id).sendKeys("3/28/2039" + Key.ENTER);
        //     browser.executeScript('window.scrollTo(' + 0 + ', ' + -250 + ');');
        //     browser.compareScreen(element(By.className('e-date-wrapper')), 'Navigation year Decade Calendar control1_mobile_' + themes[i]);
        //     await element(helper.pickerIcon_ClassName).click();
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control2_mobile_' + themes[i]);
        //     await element(helper.title_ClassName).click();
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control3_mobile_' + themes[i]);
        //     element(helper.title_ClassName).click();
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control4_mobile_' + themes[i]);
        // });

        // it('Navigation year Decade Calendar control', async () => {
        //     browser.driver.manage().window().setSize(450, 800);
        //     await browser.get(browser.basePath + '/demos/datePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path);
        //     await element(helper.value_Id).sendKeys("3/28/2015" +Key.);
        //     browser.executeScript('window.scrollTo(' + 0 + ', ' + -250 + ');');
        //     browser.compareScreen(element(By.className('e-date-wrapper')), 'Navigation year Decade Calendar control5_mobile_' + themes[i]);
        //     await element(helper.pickerIcon_ClassName).click();
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control6_mobile_' + themes[i]);
        //     await  element(helper.title_ClassName).click();
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control7_mobile_' + themes[i]);
        //     element(helper.title_ClassName).click();
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control8_mobile_' + themes[i]);
        // });

        // it('Navigation year Decade Calendar control label', async () => {
        //     browser.driver.manage().window().setSize(450, 800);
        //     await browser.get(browser.basePath + '/demos/datePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path);
        //     await element(helper.value_Id).sendKeys("3/28/2015" + Key.ENTER);
        //     browser.executeScript('window.scrollTo(' + 0 + ', ' + -250 + ');');
        //     browser.compareScreen(element(By.className('e-date-wrapper')), 'Navigation year Decade Calendar control label1_mobile_' + themes[i]);
        //     await element(helper.pickerIcon_ClassName).click();
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label2_mobile_' + themes[i]);
        //     expect(element(helper.title_ClassName).getText()).toContain("March 2015");
        //     await element(helper.title_ClassName).click();
        //     expect(element(helper.title_ClassName).getText()).toContain("2015");
        //     await element(helper.title_ClassName).click();
        //     expect(element(helper.title_ClassName).getText()).toContain("2010 - 2019");
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label4_mobile_' + themes[i]);
        // });

        // it('Navigation year Decade Calendar control label', async () => {
        //     browser.driver.manage().window().setSize(450, 800);
        //     await browser.get(browser.basePath + '/demos/datePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path);
        //     await element(helper.value_Id).sendKeys("3/28/2015" + Key.ENTER);
        //     browser.executeScript('window.scrollTo(' + 0 + ', ' + -250 + ');');
        //     browser.compareScreen(element(By.className('e-date-wrapper')), 'Navigation year Decade Calendar control label5_mobile_' + themes[i]);
        //     await element(helper.pickerIcon_ClassName).click();
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label6_mobile_' + themes[i]);
        //     expect(element(helper.title_ClassName).getText()).toContain("March 2015");
        //     await element(helper.title_ClassName).click();
        //     expect(element(helper.title_ClassName).getText()).toContain("2015");
        //     await element(helper.nextDateIcon_ClassName).click();
        //     expect(element(helper.title_ClassName).getText()).toContain("2016");
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label7_mobile_' + themes[i]);
        //     await element(helper.title_ClassName).click();
        //     expect(element(helper.title_ClassName).getText()).toContain("2010 - 2019");
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label8_mobile_' + themes[i]);
        //     await element(helper.nextDateIcon_ClassName).click();
        //     expect(element(helper.title_ClassName).getText()).toContain("2020 - 2029");
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label9_mobile_' + themes[i]);
        // });

        // it('Navigation year Decade Calendar control label', async () => {
        //     browser.driver.manage().window().setSize(450, 800);
        //     await browser.get(browser.basePath + '/demos/datePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path);
        //     await element(helper.value_Id).sendKeys("3/28/2015" + Key.ENTER);
        //     browser.compareScreen(element(By.className('e-date-wrapper')), 'Navigation year Decade Calendar control label10_mobile_' + themes[i]);
        //     await element(helper.pickerIcon_ClassName).click();
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label11_mobile_' + themes[i]);
        //     expect(element(helper.title_ClassName).getText()).toContain("March 2015");
        //     await element(helper.title_ClassName).click();
        //     expect(element(helper.title_ClassName).getText()).toContain("2015");
        //     await element(helper.prevDateIcon_ClassName).click();
        //     expect(element(helper.title_ClassName).getText()).toContain("2014");
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label12_mobile_' + themes[i]);
        //     await element(helper.title_ClassName).click();
        //     expect(element(helper.title_ClassName).getText()).toContain("2010 - 2019");
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label13_mobile_' + themes[i]);
        //     await element(helper.prevDateIcon_ClassName).click();
        //     expect(element(helper.title_ClassName).getText()).toContain("2000 - 2009");
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'Navigation year Decade Calendar control label14_mobile_' + themes[i]);
        // });

        // it('min_max', async () => {
        //     browser.driver.manage().window().setSize(450, 800);
        //     await browser.get(browser.basePath + '/demos/datePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path);
        //     await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
        //     await element(helper.min_Id).sendKeys("3/8/2015" + Key.ENTER);
        //     await element(helper.max_Id).sendKeys("3/28/2015" + Key.ENTER);
        //     await element(helper.pickerIcon_ClassName).click();
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'min_max1_mobile_' + themes[i]);
        //     expect(element(helper.prevDateIcon_ClassName).getAttribute("aria-disabled")).toContain("true");
        //     expect(element(helper.nextDateIcon_ClassName).getAttribute("aria-disabled")).toContain("true");
        //     expect(element(helper.title_ClassName).getText()).toContain("March 2015");
        //     await element(helper.title_ClassName).click();
        //     expect(element(helper.title_ClassName).getText()).toContain("2015");
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'min_max2_mobile_' + themes[i]);
        //     await element(helper.title_ClassName).click();
        //     expect(element(helper.title_ClassName).getText()).toContain("2010 - 2019");
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'min_max3_mobile_' + themes[i]);
        // });

        // it('min_max', async () => {
        //     browser.driver.manage().window().setSize(450, 800);
        //     await browser.get(browser.basePath + '/demos/datePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path);
        //     await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
        //     await element(helper.min_Id).sendKeys("3/8/2015" + Key.ENTER);
        //     await element(helper.max_Id).sendKeys("3/28/2045" + Key.ENTER);
        //     await element(helper.value_Id).sendKeys("4/4/2019" + Key.ENTER);
        //     await element(helper.pickerIcon_ClassName).click();
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'min_max4_mobile_' + themes[i]);
        //     expect(element(helper.title_ClassName).getText()).toContain("April 2019");
        //     await element(helper.nextDateIcon_ClassName).click();
        //     expect(element(helper.title_ClassName).getText()).toContain("May 2019");
        //     element(By.xpath("//div[@class='e-calendar e-control e-keyboard']//div[@class='e-content e-month']//tbody/tr[2]/td[5]")).click();
        //     browser.sleep(2000);
        //     browser.compareScreen(element(By.className('content-wrapper')), 'min_max5_mobile_' + themes[i]);
        //     await element(helper.pickerIcon_ClassName).click();
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'min_max6_mobile_' + themes[i]);
        // });

        // it('Navigate and select value', async () => {
        //     browser.driver.manage().window().setSize(450, 800);
        //     await browser.get(browser.basePath + '/demos/datePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path);
        //     await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
        //     await element(helper.min_Id).sendKeys("3/8/2015" + Key.ENTER);
        //     await element(helper.max_Id).sendKeys("3/28/2045" + Key.ENTER);
        //     await element(helper.value_Id).sendKeys("4/4/2019" + Key.ENTER);
        //     await element(helper.pickerIcon_ClassName).click();
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'value1_mobile_' + themes[i]);
        //     await element(helper.title_ClassName).click();
        //     await element(helper.title_ClassName).click();
        //     element(By.xpath("//div[@class='e-calendar e-control e-keyboard']//div[@class='e-content e-decade']//tbody/tr[2]/td[4]")).click();
        //     browser.sleep(2000);
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'value2_mobile_' + themes[i]);
        //     element(By.xpath("//div[@class='e-calendar e-control e-keyboard']//div[@class='e-content e-year']//tbody/tr[2]/td[4]")).click();
        //     browser.sleep(2000);
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'value3_mobile_' + themes[i]);
        //     element(By.xpath("//div[@class='e-calendar e-control e-keyboard']//div[@class='e-content e-month']//tbody/tr[2]/td[4]")).click();
        //     browser.compareScreen(element(By.className('content-wrapper')), 'value4_mobile_' + themes[i]);
        //     await element(helper.pickerIcon_ClassName).click();
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'value5_mobile_' + themes[i]);
        // });

        // it('Start and Depth', async () => {
        //     browser.driver.manage().window().setSize(450, 800);
        //     await browser.get(browser.basePath + '/demos/datePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path);
        //     await element(helper.value_Id).sendKeys("4/4/2019" + Key.ENTER);
        //     await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
        //     await element(helper.start_Id).sendKeys(Key.ARROW_DOWN);
        //     await element(helper.depth_Id).sendKeys(Key.ARROW_DOWN);
        //     await element(helper.pickerIcon_ClassName).click();
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'value6_mobile_' + themes[i]);
        //     element(By.xpath("//div[@class='e-calendar e-control e-keyboard']//div[@class='e-content e-decade']//tbody/tr[2]/td[4]")).click();
        //     browser.sleep(2000);
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'value7_mobile_' + themes[i]);
        //     element(By.xpath("//div[@class='e-calendar e-control e-keyboard']//div[@class='e-content e-year']//tbody/tr[2]/td[4]")).click();
        //     browser.sleep(2000);
        //     browser.compareScreen(element(By.className('content-wrapper')), 'value8_mobile_' + themes[i]);
        //     await element(helper.pickerIcon_ClassName).click();
        //     browser.compareScreen(element(By.className('e-popup-wrapper')), 'value9_mobile_' + themes[i]);
        // });
    }
});