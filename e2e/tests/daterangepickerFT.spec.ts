import { browser, element, Key, By, by, protractor } from "@syncfusion/ej2-base/e2e/index";
import { Helper } from "./Helper/DateRangePickerHelper";
import { Property, queryParams } from "@syncfusion/ej2-base";

var helper: Helper = new Helper();

//var event = new Event('change');
//let themes: String[] = ["material", "fabric", "bootstrap", "highcontrast"];
let themes: String[] = ["material"];
describe('DateRangePicker', function () {
    for (let i = 0; i < themes.length; i++) {
        let fileName: string = 'https://cdn.syncfusion.com/ej2/' + themes[i] + '.css';
        it('DateRangePicker Default', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_default_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_default_datepoup_' + themes[i]);
        });
        it('DateRangePicker_start_and_endDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_start_and_endDate_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_start_and_endDate_' + themes[i]);
        });
        it('DateRangePicker RTL', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_datepoup_' + themes[i]);
        });
        it('DateRangePicker_RTL_enable', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.enable_Id).click();
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_enable_input_' + themes[i]);
        });
        it('DateRangePicker_RTL_enable', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.enable_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_enable_value_input_' + themes[i]);
        });
        it('DateRangePicker_RTL_read', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.read_Id).click();
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_read_input_' + themes[i]);
        });
        it('DateRangePicker_RTL_read', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.read_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_read_value_input_' + themes[i]);
        });
        it('DateRangePicker_RTL_read', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.read_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_read_value_show_input_' + themes[i]);
        });

        it('DateRangePicker_RTL_clear', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.clear_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_clear_input_' + themes[i]);
        });

        it('DateRangePicker_RTL_weekNumber', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_Rtl_weekNumber_popup_' + themes[i]);
        });

        it('DateRangePicker_RTL_floatlabel', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.floatLabel_Id).sendKeys(Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_rtl_floatlabel_never_1_' + themes[i]);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_rtl_floatlabel_never_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_rtl_floatlabel_never_3_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_rtl_floatlabel_never_4_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_rtl_floatlabel_never_5_' + themes[i]);
        });

        it('DateRangePicker_RTL_floatlabel', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_rtl_floatlabel_auto_1_' + themes[i]);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_rtl_floatlabel_auto_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_rtl_floatlabel_auto_3_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_rtl_floatlabel_auto_4_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_rtl_floatlabel_auto_5_' + themes[i]);
        });

        it('DateRangePicker_RTL_floatlabel', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_rtl_floatlabel_always_1_' + themes[i]);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_rtl_floatlabel_always_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_rtl_floatlabel_always_3_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_rtl_floatlabel_always_4_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_rtl_floatlabel_always_5_' + themes[i]);
        });

        it('DateRangePicker_rtl_formats', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_format_1_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_format_1_popup_' + themes[i]);
        });
        it('DateRangePicker_rtl_formats', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_format_2_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_format_2_input_popup_' + themes[i]);
        });
        it('DateRangePicker_rtl_formats', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_format_3_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_format_3_input_popup_' + themes[i]);
        });

        it('DateRangePicker_rtl_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_firstday_2_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_firstday_2_popup_' + themes[i]);
        });
        it('DateRangePicker_rtl_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_firstday_3_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_firstday_3_popup_' + themes[i]);
        });
        it('DateRangePicker_rtl_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_firstday_4_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_firstday_4_popup_' + themes[i]);
        });
        it('DateRangePicker_rtl_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_firstday_5_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_firstday_5_popup_' + themes[i]);
        });

        it('DateRangePicker_rtl_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_firstday_6_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_firstday_6_popup_' + themes[i]);
        });
        it('DateRangePicker_rtl_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.firstDay_Id).sendKeys("1" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_firstday_1_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_firstday_1_popup_' + themes[i]);
        });

        it('DateRangePicker_RTL_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2025" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_min_1_' + themes[i]);
        });
        it('DateRangePicker_RTL_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2025" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER); // min and value
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_min_2_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_min_3_' + themes[i]);
        });
        it('DateRangePicker_RTL_min_high_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            element(helper.min_Id).sendKeys("5/25/2025" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_min_4_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_min_5_' + themes[i]);

        });
        it('DateRangePicker_RTL_min_high_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear(); // min high startvalue
            await element(helper.min_Id).sendKeys("6/25/2025" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_min_6_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_min_7_' + themes[i]);
        });
        it('DateRangePicker_RTL_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear(); // min equal startvalue
            await element(helper.min_Id).sendKeys("5/15/2025" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_min_8_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_min_9_' + themes[i]);
        });
        it('DateRangePicker_RTL_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear(); // min high start and end value
            await element(helper.min_Id).sendKeys("5/15/2045" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_min_10_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_min_11_' + themes[i]);
        });
        it('DateRangePicker_RTL_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear(); // min equal start and end value
            await element(helper.min_Id).sendKeys("4/4/2025" + Key.ENTER);
            await element(helper.value_Id).clear();
            await element(helper.value_Id).sendKeys("4/4/2025 - 4/4/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_min_12_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_min_13_' + themes[i]);
        });

        it('DateRangePicker_RTL_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click(); // max
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("5/5/2015" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_max_1_' + themes[i]);
        });
        it('DateRangePicker_RTL_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("5/5/2015" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/15/2015 - 5/2/2015" + Key.ENTER); // max and value
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_max_2_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_max_3_' + themes[i]);
        });
        it('DateRangePicker_RTL_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear(); // max out of value
            await element(helper.max_Id).sendKeys("5/25/2014" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/15/2015 - 5/2/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_max_4_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_max_5_' + themes[i]);
        });
        it('DateRangePicker_RTL_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear(); // max low startvalue
            await element(helper.max_Id).sendKeys("4/2/2015" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2015 - 6/2/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_max_6_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_max_7_' + themes[i]);
        });
        it('DateRangePicker_RTL_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear(); // max equal startvalue
            await element(helper.max_Id).sendKeys("5/15/2015" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2015 - 6/2/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_max_8_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_max_9_' + themes[i]);
        });

        it('DateRangePicker_RTL_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear(); // max equal endvalue
            await element(helper.max_Id).sendKeys("6/2/2015" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2015 - 6/2/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_max_14_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_max_15_' + themes[i]);
        });

        it('DateRangePicker_RTL_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear(); // max low start and end value
            await element(helper.max_Id).sendKeys("2/15/2015" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/15/2015 - 5/2/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_max_10_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_max_11_' + themes[i]);
        });
        it('DateRangePicker_RTL_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear(); // max equal start and end value
            await element(helper.max_Id).sendKeys("4/4/2015" + Key.ENTER);
            await element(helper.value_Id).clear();
            await element(helper.value_Id).sendKeys("4/4/2015 - 4/4/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_rtl_max_12_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_rtl_max_13_' + themes[i]);

        });

        it('DateRangePicker_RTL_max_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_max_min_' + themes[i]);
        });
        it('DateRangePicker_RTL_max_min_same_month', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("5/25/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_max_min_same_month_' + themes[i]);
        });
        it('DateRangePicker_RTL_max_min_same_date', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_max_min_same_date_' + themes[i]);
        });
        it('DateRangePicker_RTL_max_min_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/15/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/6/2018 - 6/5/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_max_min_value_' + themes[i]);
        });
        it('DateRangePicker_RTL_max_min_value_same', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 5/5/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_max_min_value_same_' + themes[i]);
        });
        it('DateRangePicker_RTL_max_min_startDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_max_min_startDate_' + themes[i]);

        });
        it('DateRangePicker_RTL_max_min_start_and_endDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/15/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_max_min_start_and_endDate_' + themes[i]);
        });

        it('DateRangePicker_RTL_max_min_start_low_max_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("4/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("12/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_max_min_start_low_max_high_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_max_min_start_low_max_high_' + themes[i]);
        });
        it('DateRangePicker_RTL_max_min_end_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("7/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_max_min_end_high_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_max_min_end_high_' + themes[i]);
        });
        it('DateRangePicker_RTL_max_min_end_high_start_low*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("4/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_max_min_end_high_start_low_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_max_min_end_high_start_low_' + themes[i]);
        });
        it('DateRangePicker_RTL_max_low_min_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_max_low_min_high_input_' + themes[i]);
        });

        it('DateRangePicker_RTL_max_low_min_high', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_max_low_min_high_input_' + themes[i]);
        });
        it('DateRangePicker_RTL_max_min_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/25/2018 - 6/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_max_min_value1_input_' + themes[i]);
        });

        it('DateRangePicker_RTL_max_min_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/25/2018 - 7/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_max_min_value2_input_' + themes[i]);
        });

        it('DateRangePicker_RTL_max_min_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/25/2018 - 7/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_max_min_value3_input_' + themes[i]);
        });

        it('DateRangePicker_RTL_max_min_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/25/2018 - 5/25/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_max_min_value4_input_' + themes[i]);
        });

        it('DateRangePicker_RTL_min_equal_startDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            // browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_max_min_end_high_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_min_equal_startDate_' + themes[i]);
        });

        it('DateRangePicker_RTL_max_equal_startDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            //browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_max_min_end_high_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_max_equal_startDate_' + themes[i]);
        });
        // start and enda date test cases.
        it('DateRangePicker_RTL_starDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER)
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_starDate_' + themes[i]);
        });

        it('DateRangePicker_RTL_starDate_mindays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("4" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_starDate_' + themes[i]);
        });

        it('DateRangePicker_RTL_starDate_maxDays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("14" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_starDate_' + themes[i]);
        });

        it('DateRangePicker_RTL_starDate_maxDays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("4" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("14" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_starDate_' + themes[i]);
        });

        it('DateRangePicker_RTL_starDate_maxDays_minDays_equal', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("4" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("4" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_starDate_maxDays_minDays_equal_' + themes[i]);
        });

        it('DateRangePicker_RTL_starDate_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_starDate_value_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_starDate_value_' + themes[i]);
        });

        it('DateRangePicker_RTL_starDate_outOfValue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("1/1/1111" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_starDate_outOfValue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_starDate_outOfValue_' + themes[i]);
        });

        it('DateRangePicker_RTL_starDate_greater_endvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("8/8/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_starDate_greater_endvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_starDate_greater_endvalue_' + themes[i]);
        });

        it('DateRangePicker_RTL_starDate_equal_endValue', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2019" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_starDate_equal_endValue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_starDate_equal_endValue_' + themes[i]);
        });

        it('DateRangePicker_RTL_endDate_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("3/3/2019" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_endDate_value_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_endDate_value_' + themes[i]);
        });

        it('DateRangePicker_RTL_endDate_outOfvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("9/9/9999" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_endDate_ouuOfvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_endDate_outOfvalue_' + themes[i]);
        });

        it('DateRangePicker_RTL_endDate_less_startvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("5/7/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_endDate_less_startvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_endDate_less_startvalue_' + themes[i]);
        });

        it('DateRangePicker_RTL_endDate_equal_startvalue', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("7/7/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_endDate_equal_startvalueinput_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_endDate_equal_startvalue_' + themes[i]);
        });

        // strictmode related test cases
        it('DateRangePicker_RTL_strict_min_high_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear();
            element(helper.min_Id).sendKeys("5/25/2025" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_strict_min_high_value_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_strict_min_high_value_popup_' + themes[i]);
        });

        it('DateRangePicker_RTL_strict_max_min_start_low_end_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("4/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("8/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_strict_max_min_start_low_end_high_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_strict_max_min_start_low_end_high_' + themes[i]);
        });
        it('DateRangePicker_RTL_strict_max_min_end_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("7/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_strict_max_min_end_high_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_strict_max_min_end_high_' + themes[i]);
        });
        it('DateRangePicker_RTL_strict_max_min_end_high_start_low*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("4/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_strict_max_min_end_high_start_low_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_strict_max_min_end_high_start_low_' + themes[i]);
        });
        it('DateRangePicker_RTL_strict_max_low_min*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_strict_max_low_min_input_' + themes[i]);
        });

        it('DateRangePicker_RTL_strict_max_min_startvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/25/2018 - 6/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_strict_max_min_startvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_strict_max_min_startvalue_' + themes[i]);
        });
        it('DateRangePicker_RTL_strict_max_min_endvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/25/2018 - 7/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_strict_max_min_endvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_strict_max_min_endvalue_' + themes[i]);
        });

        it('DateRangePicker_RTL_strict_starDate_outOfValue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("1/1/1111" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_strict_starDate_outOfValue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_strict_starDate_outOfValue_' + themes[i]);
        });

        it('DateRangePicker_RTL_strict_starDate_greater_endvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("8/8/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_strict_starDate_greater_endvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_strict_starDate_greater_endvalue_' + themes[i]);
        });

        it('DateRangePicker_RTL_strict_endDate_outOfvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("9/9/9999" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_strict_endDate_outOfvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_strict_endDate_outOfvalue_' + themes[i]);
        });

        it('DateRangePicker_RTL_strict_endDate_less_startvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("5/7/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_strict_endDate_less_startvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_strict_endDate_less_startvalue_' + themes[i]);
        });

          it('DateRangePicker_RTL_separator', async () => {
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.rtl_Id).click(); await element(helper.separator_Id).clear();
                await element(helper.separator_Id).sendKeys("$" + Key.ENTER);
                await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
                browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_separator_input_' + themes[i]);
            });

            it('DateRangePicker_RTL_separator', async () => {
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.rtl_Id).click(); await element(helper.separator_Id).clear();
                await element(helper.separator_Id).sendKeys("@" + Key.ENTER);
                await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
                browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_separator2_input_' + themes[i]);
            });

            it('DateRangePicker_RTL_separator', async () => {
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.rtl_Id).click(); await element(helper.separator_Id).clear();
                await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
                browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_separator3_input_' + themes[i]);
            });

        it('DateRangePicker_RTL_width', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.width_Id).sendKeys("450" + Key.ENTER);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_width_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_width_' + themes[i]);
        });

        it('DateRangePicker_RTL_placehlder', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.placeholder_Id).sendKeys("select a festival date range" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_placehlder_input_' + themes[i]);
        });

        it('DateRangePicker_RTL_show', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_RTL_show_' + themes[i]);
        });

        it('DateRangePicker_RTL_focus_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_focus_value_' + themes[i]);
        });

        it('DateRangePicker_RTL_blur_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_blur_value_' + themes[i]);
        });

        it('DateRangePicker_RTL_focus', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_focus_' + themes[i]);
        });

        it('DateRangePicker_RTL_blur', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.rtl_Id).click();
            await element(helper.focusIn_Id).click();
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_RTL_blur_' + themes[i]);
        });

        it('DateRangePicker_enabled', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.enable_Id).click();
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_enabled_' + themes[i]);
        });

        it('DateRangePicker_enabled with value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.enable_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2019 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_enabled with value_' + themes[i]);
        });

        it('DateRangePicker_enabled with show', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.enable_Id).click();
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_enabled with show_' + themes[i]);
        });
        it('DateRangePicker_enabled with focus', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.enable_Id).click();
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_enabled with focus_' + themes[i]);
        });

        //Readonly property

        it('DateRangePicker_readonly', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.read_Id).click();
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_readonly_' + themes[i]);
        });

        it('DateRangePicker_readonly with value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.read_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2019 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_readonly with value_' + themes[i]);
        });

        it('DateRangePicker_readonly with focus', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.read_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2019 - 6/6/2020" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_readonly with focus_' + themes[i]);
        });


        it('DateRangePicker_readonly with show', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.read_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2019 - 6/6/2020" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_readonly with show_' + themes[i]);
        });

        it('DateRangePicker_readonly with clear', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.read_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2019 - 6/6/2020" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_readonly with clear_' + themes[i]);
        });

        // Clearbutton property

        it('DateRangePicker_with clearbutton', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.clear_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2019 - 6/6/2020" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_with clearbutton_' + themes[i]);
        });


        it('DateRangePicker_clear_floatlabel', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.clear_Id).click();
            await element(helper.floatLabel_Id).sendKeys(Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_clear_floatlabel_never_1_' + themes[i]);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_clear_floatlabel_never_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_clear_floatlabel_never_3_' + themes[i]);
            //await element(helper.clearIcon_ClassName).click();
            //browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_rtl_floatlabel_never_4_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_clear_floatlabel_never_4_' + themes[i]);
        });

        it('DateRangePicker_clear_floatlabel', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.clear_Id).click();
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            // await element(helper.floatLabel_Id).sendKeys(Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_clear_floatlabel_auto_1_' + themes[i]);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_clear_floatlabel_auto_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_clear_floatlabel_auto_3_' + themes[i]);
            //await element(helper.clearIcon_ClassName).click();
            //browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_rtl_floatlabel_auto_4_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_clear_floatlabel_auto_4_' + themes[i]);
        });

        it('DateRangePicker_clear_floatlabel', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.clear_Id).click();
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_clear_floatlabel_always_1_' + themes[i]);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_clear_floatlabel_always_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_clear_floatlabel_always_3_' + themes[i]);
            //await element(helper.clearIcon_ClassName).click();
            //browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_rtl_floatlabel_always_4_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_clear_floatlabel_always_4_' + themes[i]);
        });

        // strictmode property

        it('DateRangePicker_strict_max_min_start_low_end_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("4/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("8/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_trict_max_min_start_low_end_high_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_strict_max_min_start_low_end_high_' + themes[i]);
        });
        it('DateRangePicker_strict_max_min_end_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("7/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_strict_max_min_end_high_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_strict_max_min_end_high_' + themes[i]);
        });
        it('DateRangePicker_strict_max_min_end_high_start_low*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER)
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("4/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_strict_max_min_end_high_start_low_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_strict_max_min_end_high_start_low_' + themes[i]);
        });
        it('DateRangePicker_strict_max_low_min*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_strict_max_low_min_input_' + themes[i]);
        });

        it('DateRangePicker_strict_max_min_startvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/25/2018 - 6/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_strict_max_min_startvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_strict_max_min_startvalue_' + themes[i]);
        });
        it('DateRangePicker_strict_max_min_endvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/25/2018 - 7/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_strict_max_min_endvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_strict_max_min_endvalue_' + themes[i]);
        });

        it('DateRangePicker_strict_starDate_outOfValue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("1/1/1111" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_strict_starDate_outOfValue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_strict_starDate_outOfValue_' + themes[i]);
        });

        it('DateRangePicker_strict_starDate_greater_endvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("8/8/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_strict_starDate_greater_endvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_strict_starDate_greater_endvalue_' + themes[i]);
        });

        it('DateRangePicker_strict_endDate_outOfvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("9/9/9999" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_strict_endDate_outOfvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_strict_endDate_outOfvalue_' + themes[i]);
        });

        it('DateRangePicker_strict_endDate_less_startvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("5/7/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_strict_endDate_less_startvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_strict_endDate_less_startvalue_' + themes[i]);
        });
        it('DateRangePicker_weekNumber', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_weekNumber_popup_' + themes[i]);
        });

        it('DateRangePicker_week_formats', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_format_1_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_format_1_popup_' + themes[i]);
        });
        it('DateRangePicker_week_formats', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_format_2_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_format_2_input_popup_' + themes[i]);
        });
        it('DateRangePicker_week_formats', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_format_3_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_format_3_input_popup_' + themes[i]);
        });

        it('DateRangePicker_week_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_firstday_2_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_firstday_2_popup_' + themes[i]);
        });
        it('DateRangePicker_week_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_firstday_3_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_firstday_3_popup_' + themes[i]);
        });
        it('DateRangePicker_week_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_firstday_4_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_firstday_4_popup_' + themes[i]);
        });
        it('DateRangePicker_week_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_firstday_5_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_firstday_5_popup_' + themes[i]);
        });

        it('DateRangePicker_week_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_firstday_6_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_firstday_6_popup_' + themes[i]);
        });
        it('DateRangePicker_week_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.firstDay_Id).sendKeys("1" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_firstday_1_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_firstday_1_popup_' + themes[i]);
        });

        it('DateRangePicker_week_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2025" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_min_1_' + themes[i]);
        });
        it('DateRangePicker_week_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2025" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER); // min and value
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_min_2_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_min_3_' + themes[i]);
        });
        it('DateRangePicker_week_min_high_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            element(helper.min_Id).sendKeys("5/25/2025" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_min_4_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_min_5_' + themes[i]);

        });
        it('DateRangePicker_week_min_high_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear(); // min high startvalue
            await element(helper.min_Id).sendKeys("6/25/2025" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_min_6_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_min_7_' + themes[i]);
        });
        it('DateRangePicker_week_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear(); // min equal startvalue
            await element(helper.min_Id).sendKeys("5/15/2025" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_min_8_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_min_9_' + themes[i]);
        });
        it('DateRangePicker_week_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear(); // min high start and end value
            await element(helper.min_Id).sendKeys("5/15/2045" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_min_10_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_min_11_' + themes[i]);
        });
        it('DateRangePicker_week_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear(); // min equal start and end value
            await element(helper.min_Id).sendKeys("4/4/2025" + Key.ENTER);
            await element(helper.value_Id).clear();
            await element(helper.value_Id).sendKeys("4/4/2025 - 4/4/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_min_12_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_min_13_' + themes[i]);
        });

        it('DateRangePicker_week_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click(); // max
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("5/5/2015" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_max_1_' + themes[i]);
        });
        it('DateRangePicker_week_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("5/5/2015" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/15/2015 - 5/2/2015" + Key.ENTER); // max and value
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_max_2_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_max_3_' + themes[i]);
        });
        it('DateRangePicker_week_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.max_Id).clear(); // max out of value
            await element(helper.max_Id).sendKeys("5/25/2014" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/15/2015 - 5/2/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_max_4_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_max_5_' + themes[i]);
        });
        it('DateRangePicker_week_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.max_Id).clear(); // max low startvalue
            await element(helper.max_Id).sendKeys("4/2/2015" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2015 - 6/2/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_max_6_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_max_7_' + themes[i]);
        });
        it('DateRangePicker_week_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.max_Id).clear(); // max equal startvalue
            await element(helper.max_Id).sendKeys("5/15/2015" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2015 - 6/2/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_max_8_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_max_9_' + themes[i]);
        });

        it('DateRangePicker_week_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.max_Id).clear(); // max equal endvalue
            await element(helper.max_Id).sendKeys("5/15/2015" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/15/2015 - 5/15/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_max_14_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_max_15_' + themes[i]);
        });

        it('DateRangePicker_week_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.max_Id).clear(); // max low start and end value
            await element(helper.max_Id).sendKeys("2/15/2015" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/15/2015 - 5/2/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_max_10_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_max_11_' + themes[i]);
        });
        it('DateRangePicker_week_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.max_Id).clear(); // max equal start and end value
            await element(helper.max_Id).sendKeys("4/4/2015" + Key.ENTER);
            await element(helper.value_Id).clear();
            await element(helper.value_Id).sendKeys("4/4/2015 - 4/4/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_max_12_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_max_13_' + themes[i]);

        });

        it('DateRangePicker_week_max_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_max_min_' + themes[i]);
        });
        it('DateRangePicker_week_max_min_same_month', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("5/25/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_max_min_same_month_' + themes[i]);
        });
        it('DateRangePicker_week_max_min_same_date', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_max_min_same_date_' + themes[i]);
        });
        it('DateRangePicker_week_max_min_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/15/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/6/2018 - 6/5/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_max_min_value_' + themes[i]);
        });
        it('DateRangePicker_week_max_min_value_same', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 5/5/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_max_min_value_same_' + themes[i]);
        });
        it('DateRangePicker_week_max_min_startDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_max_min_startDate_' + themes[i]);

        });
        it('DateRangePicker_week_max_min_start_and_endDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/15/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_max_min_start_and_endDate_' + themes[i]);
        });

        it('DateRangePicker_week_max_min_start_low_max_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("4/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("12/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_max_min_start_low_max_high_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_max_min_start_low_max_high_' + themes[i]);
        });
        it('DateRangePicker_week_max_min_end_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("7/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_max_min_end_high_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_max_min_end_high_' + themes[i]);
        });
        it('DateRangePicker_week_max_min_end_high_start_low*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("4/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_max_min_end_high_start_low_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_max_min_end_high_start_low_' + themes[i]);
        });
        it('DateRangePicker_week_max_low_min_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_max_low_min_high_input_' + themes[i]);
        });

        it('DateRangePicker_week_max_low_min_end_high_start_low*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_max_low_min_end_high_start_low_input_' + themes[i]);
        });
        it('DateRangePicker_week_max_min_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/25/2018 - 6/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_max_min_value1_input_' + themes[i]);
        });

        it('DateRangePicker_week_max_min_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/25/2018 - 7/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_max_min_value2_input_' + themes[i]);
        });

        it('DateRangePicker_week_max_min_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/25/2018 - 7/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_max_min_value3_input_' + themes[i]);
        });

        it('DateRangePicker_week_max_min_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/25/2018 - 5/25/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_max_min_value4_input_' + themes[i]);
        });

        it('DateRangePicker_week_min_equal_startDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_min_equal_startDate_' + themes[i]);
        });

        it('DateRangePicker_week_max_equal_startDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_max_equal_startDate_' + themes[i]);
        });

        it('DateRangePicker_week_starDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER)
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_starDate_' + themes[i]);
        });

        it('DateRangePicker_week_starDate_mindays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("4" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_starDate_' + themes[i]);
        });

        it('DateRangePicker_week_starDate_maxDays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("14" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_starDate_' + themes[i]);
        });

        it('DateRangePicker_week_starDate_maxDays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("4" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("14" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_starDate_' + themes[i]);
        });
        it('DateRangePicker_week_starDate_maxDays_mindays_same', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("14" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("14" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_starDate_maxDays_mindays_same_' + themes[i]);
        });
        it('DateRangePicker_week_starDate_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_starDate_value_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_starDate_value_' + themes[i]);
        });

        it('DateRangePicker_week_starDate_outOfValue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("1/1/1111" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_starDate_outOfValue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_starDate_outOfValue_' + themes[i]);
        });

        it('DateRangePicker_week_starDate_greater_endvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("8/8/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_starDate_greater_endvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_starDate_greater_endvalue_' + themes[i]);
        });

        it('DateRangePicker_week_starDate_equal_endValue', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2019" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_starDate_equal_endValue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_starDate_equal_endValue_' + themes[i]);
        });

        it('DateRangePicker_week_endDate_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("3/3/2019" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_endDate_value_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_endDate_value_' + themes[i]);
        });

        it('DateRangePicker_week_endDate_outOfvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("9/9/9999" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_endDate_ouuOfvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_endDate_outOfvalue_' + themes[i]);
        });

        it('DateRangePicker_week_endDate_less_startvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("5/7/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_endDate_less_startvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_endDate_less_startvalue_' + themes[i]);
        });

        it('DateRangePicker_week_endDate_equal_startvalue', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("7/7/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_endDate_equal_startvalueinput_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_endDate_equal_startvalue_' + themes[i]);
        });

        it('DateRangePicker_week_strict_max_min_start_low_end_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("4/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("8/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_strict_max_min_start_low_end_high_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_strict_max_min_start_low_end_high_' + themes[i]);
        });
        it('DateRangePicker_week_strict_max_min_end_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("7/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_strict_max_min_end_high_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_strict_max_min_end_high_' + themes[i]);
        });
        it('DateRangePicker_week_strict_max_min_end_high_start_low*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("4/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_strict_max_min_end_high_start_low_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_strict_max_min_end_high_start_low_' + themes[i]);
        });
        it('DateRangePicker_week_strict_max_low_min*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_strict_max_low_min_input_' + themes[i]);
        });

        it('DateRangePicker_week_strict_max_min_startvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/25/2018 - 6/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_strict_max_min_startvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_strict_max_min_startvalue_' + themes[i]);
        });
        it('DateRangePicker_week_strict_max_min_endvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/25/2018 - 7/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_strict_max_min_endvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_strict_max_min_endvalue_' + themes[i]);
        });

        it('DateRangePicker_week_strict_starDate_outOfValue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("1/1/1111" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_strict_starDate_outOfValue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_strict_starDate_outOfValue_' + themes[i]);
        });

        it('DateRangePicker_week_strict_starDate_greater_endvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("8/8/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_strict_starDate_greater_endvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_strict_starDate_greater_endvalue_' + themes[i]);
        });

        it('DateRangePicker_week_strict_endDate_outOfvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("9/9/9999" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_strict_endDate_outOfvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_strict_endDate_outOfvalue_' + themes[i]);
        });

        it('DateRangePicker_week_strict_endDate_less_startvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("5/7/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_strict_endDate_less_startvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_strict_endDate_less_startvalue_' + themes[i]);
        });

        it('DateRangePicker_week_width', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.width_Id).sendKeys("450" + Key.ENTER);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_week_width_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_width_' + themes[i]);
        });

        it('DateRangePicker_week_show', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.week_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_week_show_' + themes[i]);
        });

        it('DateRangePicker_floatlabel', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.floatLabel_Id).sendKeys(Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_never_1_' + themes[i]);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_never_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_never_3_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_never_4_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_never_5_' + themes[i]);
        });

        it('DateRangePicker_floatlabel', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            // await element(helper.floatLabel_Id).sendKeys(Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_auto_1_' + themes[i]);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_auto_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_auto_3_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_auto_4_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_auto_5_' + themes[i]);
        });

        it('DateRangePicker_floatlabel', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_always_1_' + themes[i]);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_always_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_always_3_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_always_4_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_always_5_' + themes[i]);
        });

        it('DateRangePicker_floatlabel_start_endDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.floatLabel_Id).sendKeys(Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_start_endDate_never_1_' + themes[i]);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_start_endDate_never_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_start_endDate_never_3_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_start_endDate_never_4_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_start_endDate_never_5_' + themes[i]);
        });

        it('DateRangePicker_floatlabel_start_endDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            // await element(helper.floatLabel_Id).sendKeys(Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_start_endDate_auto_1_' + themes[i]);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_start_endDate_auto_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_start_endDate_auto_3_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_start_endDate_auto_4_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_start_endDate_auto_5_' + themes[i]);
        });

        it('DateRangePicker_floatlabel_start_endDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.floatLabel_Id).sendKeys(Key.ARROW_DOWN);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_start_endDate_always_1_' + themes[i]);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_start_endDate_always_2_' + themes[i]);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_start_endDate_always_3_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_start_endDate_always_4_' + themes[i]);
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_floatlabel_start_endDate_always_5_' + themes[i]);
        });

        it('DateRangePicker_formats', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_format_1_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_format_1_popup_' + themes[i]);
        });
        it('DateRangePicker_formats', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_format_2_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_format_2_input_popup_' + themes[i]);
        });
        it('DateRangePicker_formats', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_format_3_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_format_3_input_popup_' + themes[i]);
        });

        it('DateRangePicker_formats_start_endDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/15/2018" + Key.ENTER);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_format_start_endDate_1_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_format_start_endDate_1_popup_' + themes[i]);
        });
        it('DateRangePicker_formats', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/15/2018" + Key.ENTER);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_format_start_endDate_2_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_format_start_endDate_2_input_popup_' + themes[i]);
        });
        it('DateRangePicker_formats', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/15/2018" + Key.ENTER);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            await element(helper.format_Id).sendKeys(Key.ARROW_DOWN);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_format_start_endDate_3_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_format_start_endDate_3_input_popup_' + themes[i]);
        });

        it('DateRangePicker_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_2_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_2_popup_' + themes[i]);
        });
        it('DateRangePicker_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_3_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_3_popup_' + themes[i]);
        });
        it('DateRangePicker_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_4_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_4_popup_' + themes[i]);
        });
        it('DateRangePicker_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_5_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_5_popup_' + themes[i]);
        });

        it('DateRangePicker_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_6_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_6_popup_' + themes[i]);
        });
        it('DateRangePicker_firstday', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("1" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 6/6/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_1_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_1_popup_' + themes[i]);
        });

        // firsday property

        it('DateRangePicker_firstday_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2025" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_min_1_' + themes[i]);
        });
        it('DateRangePicker_firstday_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2025" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER); // min and value
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_min_2_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_min_3_' + themes[i]);
        });
        it('DateRangePicker_firstday_min_high_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.min_Id).clear();
            element(helper.min_Id).sendKeys("5/25/2025" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_min_4_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_min_5_' + themes[i]);

        });
        it('DateRangePicker_firstday_min_high_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.min_Id).clear(); // min high startvalue
            await element(helper.min_Id).sendKeys("6/25/2025" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_min_6_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_min_7_' + themes[i]);
        });
        it('DateRangePicker_firstday_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.min_Id).clear(); // min equal startvalue
            await element(helper.min_Id).sendKeys("5/15/2025" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_min_8_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_min_9_' + themes[i]);
        });
        it('DateRangePicker_firstday_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("1" + Key.ENTER);
            await element(helper.min_Id).clear(); // min high start and end value
            await element(helper.min_Id).sendKeys("5/15/2045" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_min_10_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_min_11_' + themes[i]);
        });
        it('DateRangePicker_firstday_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.min_Id).clear(); // min equal start and end value
            await element(helper.min_Id).sendKeys("4/4/2025" + Key.ENTER);
            await element(helper.value_Id).clear();
            await element(helper.value_Id).sendKeys("4/4/2025 - 4/4/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_min_12_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_min_13_' + themes[i]);
        });

        it('DateRangePicker_firstday_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER); // max
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("5/5/2015" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_max_1_' + themes[i]);
        });
        it('DateRangePicker_firstday_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("5/5/2015" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/15/2015 - 5/2/2015" + Key.ENTER); // max and value
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_max_2_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePickerfirstday_max_3_' + themes[i]);
        });
        it('DateRangePicker_firstday_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
            await element(helper.max_Id).clear(); // max out of value
            await element(helper.max_Id).sendKeys("5/25/2014" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/15/2015 - 5/2/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_max_4_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_max_5_' + themes[i]);
        });
        it('DateRangePicker_firstday_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.max_Id).clear(); // max low startvalue
            await element(helper.max_Id).sendKeys("4/2/2015" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2015 - 6/2/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_max_6_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_max_7_' + themes[i]);
        });
        it('DateRangePicker_firstday_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.max_Id).clear(); // max equal startvalue
            await element(helper.max_Id).sendKeys("5/15/2015" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2015 - 6/2/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_max_8_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_max_9_' + themes[i]);
        });

        it('DateRangePicker_firstday_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.max_Id).clear(); // max low start and end value
            await element(helper.max_Id).sendKeys("2/15/2015" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/15/2015 - 5/2/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_max_10_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_max_11_' + themes[i]);
        });
        it('DateRangePicker_firstday_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.max_Id).clear(); // min equal start and end value
            await element(helper.max_Id).sendKeys("4/4/2015" + Key.ENTER);
            await element(helper.value_Id).clear();
            await element(helper.value_Id).sendKeys("4/4/2015 - 4/4/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_max_12_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_max_13_' + themes[i]);

        });

        it('DateRangePicker_firstday_max_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_max_min_' + themes[i]);
        });
        it('DateRangePicker_firstday_max_min_same_month', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("5/25/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_max_min_same_month_' + themes[i]);
        });
        it('DateRangePicker_firstday_max_min_same_date', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_max_min_same_date_' + themes[i]);
        });
        it('DateRangePicker_firstday_max_min_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/15/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/6/2018 - 6/5/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_max_min_value_' + themes[i]);
        });
        it('DateRangePicker_firstday_max_min_value_same', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 5/5/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_max_min_value_same_' + themes[i]);
        });
        it('DateRangePicker_firstday_max_min_startDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_max_min_startDate_' + themes[i]);

        });
        it('DateRangePicker_firstday_max_min_start_and_endDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/15/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_max_min_start_and_endDate_' + themes[i]);
        });

        it('DateRangePicker_firstday_max_min_start_low_max_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("4/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("12/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_max_min_start_low_max_high_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_max_min_start_low_max_high_' + themes[i]);
        });
        it('DateRangePicker_firstday_max_min_end_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("7/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_max_min_end_high_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_max_min_end_high_' + themes[i]);
        });
        it('DateRangePicker_firstday_max_min_end_high_start_low*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("4/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_max_min_end_high_start_low_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_max_min_end_high_start_low_' + themes[i]);
        });
        it('DateRangePicker_firstday_max_low_min_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_max_low_min_high_input_' + themes[i]);
        });

        it('DateRangePicker_firstday_max_low_min_end_high_start_low*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_max_low_min_end_high_start_low_input_' + themes[i]);
        });
        it('DateRangePicker_firstday_max_min_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/25/2018 - 6/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_max_min_value1_input_' + themes[i]);
        });

        it('DateRangePicker_firstday_max_min_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/25/2018 - 7/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_max_min_value2_input_' + themes[i]);
        });

        it('DateRangePicker_firstday_max_min_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/25/2018 - 7/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_max_min_value3_input_' + themes[i]);
        });

        it('DateRangePicker_firstday_max_min_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/25/2018 - 5/25/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_max_min_value4_input_' + themes[i]);
        });

        it('DateRangePicker_firstday_min_equal_startDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_min_equal_startDate_' + themes[i]);
        });

        it('DateRangePicker_firstday_max_equal_startDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_max_equal_startDate_' + themes[i]);
        });
        // start and enda date test cases.
        it('DateRangePicker_firstday_starDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER)
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_starDate_' + themes[i]);
        });

        it('DateRangePicker_firstday_starDate_mindays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("4" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_starDate_mindays_' + themes[i]);
        });

        it('DateRangePicker_firstday_starDate_maxDays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("14" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_starDate_maxDays_' + themes[i]);
        });

        it('DateRangePicker_firstday_starDate_min_and_maxDays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("4" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("14" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_starDate_min_and_maxDays_' + themes[i]);
        });

        it('DateRangePicker_firstday_starDate_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_starDate_value_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_starDate_value_' + themes[i]);
        });

        it('DateRangePicker_firstday_starDate_outOfValue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("1/1/1111" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_starDate_outOfValue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_starDate_outOfValue_' + themes[i]);
        });

        it('DateRangePicker_firstday_starDate_greater_endvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("8/8/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_starDate_greater_endvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_starDate_greater_endvalue_' + themes[i]);
        });

        it('DateRangePicker_firstday_starDate_equal_endValue', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2019" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_starDate_equal_endValue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_starDate_equal_endValue_' + themes[i]);
        });

        it('DateRangePicker_firstday_endDate_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("3/3/2019" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_endDate_value_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_endDate_value_' + themes[i]);
        });

        it('DateRangePicker_firstday_endDate_outOfvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("9/9/9999" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_endDate_ouuOfvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_endDate_outOfvalue_' + themes[i]);
        });

        it('DateRangePicker_firstday_endDate_less_startvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("5/7/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_endDate_less_startvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_endDate_less_startvalue_' + themes[i]);
        });

        it('DateRangePicker_firstday_endDate_equal_startvalue', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("7/7/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_endDate_equal_startvalueinput_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_endDate_equal_startvalue_' + themes[i]);
        });

        // strictmode related test cases

        it('DateRangePicker_firstday_strict_max_min_start_low_end_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("4/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("8/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_strict_max_min_start_low_end_high_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_strict_max_min_start_low_end_high_' + themes[i]);
        });
        it('DateRangePicker_firstday_strict_max_min_end_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("7/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_strict_max_min_end_high_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_strict_max_min_end_high_' + themes[i]);
        });
        it('DateRangePicker_firstday_strict_max_min_end_high_start_low*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("4/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_strict_max_min_end_high_start_low_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_strict_max_min_end_high_start_low_' + themes[i]);
        });
        it('DateRangePicker_firstday_strict_max_low_min*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_strict_max_low_min_input_' + themes[i]);
        });

        it('DateRangePicker_firstday_strict_max_min_startvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/25/2018 - 6/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_strict_max_min_startvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_strict_max_min_startvalue_' + themes[i]);
        });
        it('DateRangePicker_firstday_strict_max_min_endvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("2" + Key.ENTER);
            await element(helper.strict_Id).click();
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/25/2018 - 7/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_strict_max_min_endvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_strict_max_min_endvalue_' + themes[i]);
        });

        it('DateRangePicker_firstday_strict_starDate_outOfValue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("3" + Key.ENTER);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("1/1/1111" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_strict_starDate_outOfValue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_strict_starDate_outOfValue_' + themes[i]);
        });

        it('DateRangePicker_firstday_strict_starDate_greater_endvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("4" + Key.ENTER);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("8/8/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_strict_starDate_greater_endvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_strict_starDate_greater_endvalue_' + themes[i]);
        });

        it('DateRangePicker_firstday_strict_endDate_outOfvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("5" + Key.ENTER);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("9/9/9999" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_strict_endDate_outOfvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_strict_endDate_outOfvalue_' + themes[i]);
        });

        it('DateRangePicker_firstday_strict_endDate_less_startvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.firstDay_Id).sendKeys("6" + Key.ENTER);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("5/7/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_firstday_strict_endDate_less_startvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_firstday_strict_endDate_less_startvalue_' + themes[i]);
        });

        it('DateRangePicker_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2025" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_min_1_' + themes[i]);
        });
        it('DateRangePicker_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2025" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER); // min and value
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_min_2_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_min_3_' + themes[i]);
        });
        it('DateRangePicker_min_high_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            element(helper.min_Id).sendKeys("5/25/2025" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_min_4_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_min_5_' + themes[i]);

        });
        it('DateRangePicker_min_high_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); // min high startvalue
            await element(helper.min_Id).sendKeys("6/25/2025" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_min_6_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_min_7_' + themes[i]);
        });
        it('DateRangePicker_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); // min equal startvalue
            await element(helper.min_Id).sendKeys("5/15/2025" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_min_8_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_min_9_' + themes[i]);
        });
        it('DateRangePicker_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); // min high start and end value
            await element(helper.min_Id).sendKeys("5/15/2045" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2025 - 5/25/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_min_10_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_min_11_' + themes[i]);
        });
        it('DateRangePicker_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); // min equal start and end value
            await element(helper.min_Id).sendKeys("4/4/2025" + Key.ENTER);
            await element(helper.value_Id).clear();
            await element(helper.value_Id).sendKeys("4/4/2025 - 4/4/2025" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_min_12_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_min_13_' + themes[i]);
        });

        it('DateRangePicker_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("5/5/2015" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_max_1_' + themes[i]);
        });
        it('DateRangePicker_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("5/5/2015" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/15/2015 - 5/2/2015" + Key.ENTER); // max and value
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_max_2_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_max_3_' + themes[i]);
        });
        it('DateRangePicker_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear(); // max out of value
            await element(helper.max_Id).sendKeys("5/25/2014" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/15/2015 - 5/2/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_max_4_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_max_5_' + themes[i]);
        });
        it('DateRangePicker_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear(); // max low startvalue
            await element(helper.max_Id).sendKeys("4/2/2015" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2015 - 6/2/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_max_6_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_max_7_' + themes[i]);
        });
        it('DateRangePicker_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear(); // max equal startvalue
            await element(helper.max_Id).sendKeys("5/15/2015" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/15/2015 - 6/2/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_max_8_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_max_9_' + themes[i]);
        });
        it('DateRangePicker_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear(); // max equal endvalue
            await element(helper.max_Id).sendKeys("5/15/2015" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/15/2015 - 5/15/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_max_14_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_max_15_' + themes[i]);
        });

        it('DateRangePicker_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear(); // max low start and end value
            await element(helper.max_Id).sendKeys("2/15/2015" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/15/2015 - 5/2/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_max_10_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_max_11_' + themes[i]);
        });
        it('DateRangePicker_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear(); // min equal start and end value
            await element(helper.max_Id).sendKeys("4/4/2015" + Key.ENTER);
            await element(helper.value_Id).clear();
            await element(helper.value_Id).sendKeys("4/4/2015 - 4/4/2015" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicke_max_12_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_max_13_' + themes[i]);

        });

        it('DateRangePicker_max_min', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_max_min_' + themes[i]);
        });
        it('DateRangePicker_max_min_same_month', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("5/25/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_max_min_same_month_' + themes[i]);
        });
        it('DateRangePicker_max_min_same_date', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_max_min_same_date_' + themes[i]);
        });
        it('DateRangePicker_max_min_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/15/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/6/2018 - 6/5/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_max_min_value_' + themes[i]);
        });
        it('DateRangePicker_max_min_value_same', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/5/2018 - 5/5/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_max_min_value_same_' + themes[i]);
        });
        it('DateRangePicker_max_min_startDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_max_min_startDate_' + themes[i]);

        });
        it('DateRangePicker_max_min_start_and_endDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/15/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_max_min_start_and_endDate_' + themes[i]);
        });

        it('DateRangePicker_max_min_start_low_max_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("4/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("12/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_max_min_start_low_max_high_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_max_min_start_low_max_high_' + themes[i]);
        });
        it('DateRangePicker_max_min_end_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("7/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_max_min_end_high_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_max_min_end_high_' + themes[i]);
        });
        it('DateRangePicker_max_min_end_high_start_low*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("4/15/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/15/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_max_min_end_high_start_low_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_max_min_end_high_start_low_' + themes[i]);
        });
        it('DateRangePicker_max_low_min_high*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_max_low_min_high_input_' + themes[i]);
        });

        it('DateRangePicker_max_low_min_end_high_start_low*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("12/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_max_low_min_end_high_start_low_input_' + themes[i]);
        });
        it('DateRangePicker_max_min_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/25/2018 - 6/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_max_min_value1_input_' + themes[i]);
        });

        it('DateRangePicker_max_min_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/25/2018 - 7/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_max_min_value2_input_' + themes[i]);
        });

        it('DateRangePicker_max_min_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("4/25/2018 - 7/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_max_min_value3_input_' + themes[i]);
        });

        it('DateRangePicker_max_min_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/25/2018" + Key.ENTER);
            await element(helper.value_Id).sendKeys("5/25/2018 - 5/25/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_max_min_value4_input_' + themes[i]);
        });

        it('DateRangePicker_min_equal_startDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear();
            await element(helper.min_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_min_equal_startDate_' + themes[i]);
        });

        it('DateRangePicker_max_equal_startDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.max_Id).clear();
            await element(helper.max_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_max_equal_startDate_' + themes[i]);
        });
        // start and enda date test cases.
        it('DateRangePicker_starDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER)
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_starDate_' + themes[i]);
        });

        it('DateRangePicker_starDate_mindays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("4" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_starDate_mindays_' + themes[i]);
        });

        it('DateRangePicker_starDate_maxDays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("14" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_starDate_maxDays_' + themes[i]);
        });

        it('DateRangePicker_starDate_maxDays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("4" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("14" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_starDate_maxDays_and_mindays_' + themes[i]);
        });

        it('DateRangePicker_starDate_max_and_minDays_same', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("14" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("14" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_starDate_max_and_minDays_same_' + themes[i]);
        });

        it('DateRangePicker_starDate_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_starDate_value_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_starDate_value_' + themes[i]);
        });

        it('DateRangePicker_starDate_outOfValue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("1/1/1111" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_starDate_outOfValue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_starDate_outOfValue_' + themes[i]);
        });

        it('DateRangePicker_starDate_greater_endvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("8/8/2020" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_starDate_greater_endvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_starDate_greater_endvalue_' + themes[i]);
        });

        it('DateRangePicker_starDate_equal_endValue', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("5/5/2019" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_starDate_equal_endValue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_starDate_equal_endValue_' + themes[i]);
        });

        it('DateRangePicker_endDate_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("3/3/2019" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_endDate_value_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_endDate_value_' + themes[i]);
        });

        it('DateRangePicker_endDate_outOfvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("9/9/9999" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_endDate_ouuOfvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_endDate_outOfvalue_' + themes[i]);
        });

        it('DateRangePicker_endDate_less_startvalue*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("5/7/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_endDate_less_startvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_endDate_less_startvalue_' + themes[i]);
        });

        it('DateRangePicker_endDate_equal_startvalue', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("7/7/2018" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_endDate_equal_startvalue_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_endDate_equal_startvalue_' + themes[i]);
        });

        //Extra spec for value
        it('DateRangePicker_startDate_high_enddate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.startDate_Id).sendKeys("7/7/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/6/2016" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_startDate_high_enddate_input_' + themes[i]);
        });

        it('DateRangePicker_startDate_high_enddate with strictmode', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.startDate_Id).sendKeys("7/7/2018" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/6/2016" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_startDate_high_enddate_with_Strict_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_startDate_high_enddate_with_Strict_' + themes[i]);
        });

        it('DateRangePicker_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_value_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_value_' + themes[i]);
        });

        it('DateRangePicker_value_start_endDate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("7/7/2016" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("5/5/2022" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_value_start_endDate_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_value_start_endDate_' + themes[i]);
        });
        it('DateRangePicker_start_endDate_and_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.startDate_Id).sendKeys("7/7/2016" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("5/5/2022" + Key.ENTER);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker__start_endDate_and_value_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker__start_endDate_and_value_' + themes[i]);
        });

        it('DateRangePicker_value_start_endDate*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("7/7/2020" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("5/5/2016" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_value_start_endDate2_input_' + themes[i]);
        });
        it('DateRangePicker_start_endDate_and_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.startDate_Id).sendKeys("7/7/2016" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("5/5/2022" + Key.ENTER);
            await element(helper.value_Id).sendKeys("7/7/2020 - 5/5/2019" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker__start_endDate_and_value2_input_' + themes[i]);
        });

        it('DateRangePicker_value_start_endDate_strict*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element (helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("7/7/2020" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("5/5/2016" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_value_start_endDate_strict_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_value_start_strict_endDate_' + themes[i]);
        });
        it('DateRangePicker_start_endDate_and_value_strict*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element (helper.strict_Id).click();
            await element(helper.startDate_Id).sendKeys("7/7/2016" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("5/5/2022" + Key.ENTER);
            await element(helper.value_Id).sendKeys("7/7/2020 - 5/5/2019" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker__start_endDate_and_value_strict_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker__start_endDate_and_value_strict_' + themes[i]);
        });

        it('DateRangePicker_start_endDate_and_value*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("9/9/9999" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker__start_endDate_and_value_4_input_' + themes[i]);
        });

        it('DateRangePicker_start_endDate_and_value_strict*', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.strict_Id).click();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.startDate_Id).sendKeys("9/9/9999" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker__start_endDate_and_value_4_strict_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker__start_endDate_and_value_4_strict_' + themes[i]);
        });

         it('DateRangePicker_width', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.width_Id).sendKeys("450" + Key.ENTER);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_width_input_' + themes[i]);
            await element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_width_' + themes[i]);
        });

        it('DateRangePicker_placehlder', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.placeholder_Id).sendKeys("select a festival date range" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_placehlder_input_' + themes[i]);
        });

        it('DateRangePicker_show', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.show_Id).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_show_' + themes[i]);
        });

        it('DateRangePicker_focus_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_focus_value_' + themes[i]);
        });

        it('DateRangePicker_blur_value', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            await element(helper.focusIn_Id).click();
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_blur_value_' + themes[i]);
        });

        it('DateRangePicker_focus', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.focusIn_Id).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRangePicker_focus_' + themes[i]);
        });

        it('DateRangePicker_blur', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.focusIn_Id).click();
            await element(helper.focusOut_Id).click();
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_blur_' + themes[i]);
        });

        it('DateRangePicker_separator', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.separator_Id).clear();
            await element(helper.separator_Id).sendKeys("$" + Key.ENTER);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_separator_input_' + themes[i]);
        });
        it('DateRangePicker_separator', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.separator_Id).clear();
            await element(helper.separator_Id).sendKeys("+" + Key.ENTER);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_separator4_input_' + themes[i]);
        });

        it('DateRangePicker_separator', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.separator_Id).clear();
            await element(helper.separator_Id).sendKeys("@" + Key.ENTER);
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_separator2_input_' + themes[i]);
        });

        it('DateRangePicker_separator', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.separator_Id).clear();
            await element(helper.value_Id).sendKeys("7/7/2018 - 5/5/2019" + Key.ENTER);
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'DateRangePicker_separator3_input_' + themes[i]);
        });

       // Interaction level specs

        it('DateRangePicker_popup', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            helper.inputRange(helper.inputBox_Id, "1/1/2017 - 2/8/2017");
            element(helper.dateRangeIcon_ClassName).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_popup_' + themes[i]);
        });

        it('Check DateRangePicker Popup is closed by clicking on dateRange Icon', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            helper.inputRange(helper.inputBox_Id, "1/1/2017 - 2/8/2017"); //set a range in input box since current date been maintained
            helper.openPopUp(); // Opens the daterange picekr popup
            helper.waitUntillClickable(helper.cancelButton_Xpath); //check for cancel buttton is present and then proceed to take screenshot
            element(helper.dateRangeIcon_ClassName).click();
            helper.waitUntillinvisibilityOf(helper.dateRangePopup_Id);
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRange_PopUpclosed_' + themes[i]);
        });

        it('Check Cancel Button Works', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            helper.inputRange(helper.inputBox_Id, "1/1/2017 - 2/8/2017"); //set a range in input box since current date been maintained
            helper.openPopUp(); // Opens the daterange picekr popup
            helper.waitUntillClickable(helper.cancelButton_Xpath); //check for cancel buttton is present and then proceed to click
            element(helper.cancelButton_Xpath).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRange_Cancel_' + themes[i]);
        });
        it('Check for Apply Button is enabled after a Date been given as input in a picker', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            helper.inputRange(helper.inputBox_Id, "1/1/2017 - 2/8/2017"); //set a range in input box since current date been maintained
            helper.openPopUp(); // Opens the daterange picekr popup
            helper.waitUntillClickable(helper.applyButton_Xpath); //wait for apply buttton is present and then proceed to validate
            expect(element(helper.applyButton_Xpath).isDisplayed()).toBeTruthy();
        });

        it('Check for right nav icon on left container is disabled after a Date been given as input in a picker', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            helper.inputRange(helper.inputBox_Id, "1/5/2017 - 2/8/2017"); //set a range in input box since current date been maintained
            helper.openPopUp(); // Opens the daterange picekr popup
            helper.waitUntillClickable(helper.applyButton_Xpath); //wait for apply buttton is present
            expect(element(helper.startDateNexticon_Xpath).getAttribute("aria-disabled")).toContain("true");
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRange_LeftCalender_' + themes[i]);
            expect(element(helper.endDatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("true");
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRange_RightCalender_' + themes[i]);
        });

        it('selected days count', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER); //set a range in input box since current date been maintained
            helper.openPopUp(); // Opens the daterange picekr popup
            helper.waitUntillClickable(helper.applyButton_Xpath); //wait for apply buttton is present
            expect(element(helper.selectedDays_ClassName).getText()).toContain("35 days");
            browser.compareScreen(element(By.id('dateRange_popup')), 'DateRange_selectedDays_' + themes[i]);
        });

        it('selected text labels', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER); //set a range in input box since current date been maintained
            await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
            helper.waitUntillClickable(helper.applyButton_Xpath);
            expect(element(helper.selectedDays_ClassName).getText()).toContain("35 days");
            expect(element(helper.startDateLabel_ClassName).getText()).toContain("Jan 5, 2017");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("Feb 8, 2017");
            browser.compareScreen(element(By.id('dateRange_popup')), 'selected labels_' + themes[i]);
        });

        it('start and end date icon with min_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("4/4/2019" + Key.ENTER);
            await element(helper.max_Id).sendKeys("5/24/2019" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
            helper.waitUntillClickable(helper.applyButton_Xpath);
            expect(element(helper.startDateNexticon_Xpath).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.startDatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.endDateNexticon_Xpath).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.endDatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("true");
            browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with min_max_' + themes[i]);
        });
        it('start and end date icon with min_max', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("4/4/2019" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/24/2019" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
            helper.waitUntillClickable(helper.applyButton_Xpath);
            expect(element(helper.startDateNexticon_Xpath).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.startDatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.endDateNexticon_Xpath).getAttribute("aria-disabled")).toContain("false");
            expect(element(helper.endDatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("true");
            browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with min_max_2_' + themes[i]);
        });
        it('start and end date icon with min_max_label', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("4/4/2019" + Key.ENTER);
            await element(helper.max_Id).sendKeys("5/24/2019" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
            helper.waitUntillClickable(helper.applyButton_Xpath);
            await element(helper.endDateHeader_Xpath).click();
            expect(element(helper.startDateNexticon_Xpath).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.startDatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.endDateNexticon_Xpath).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.endDatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("true");
            browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with min_max_label_' + themes[i]);
        })

        it('start and end date icon with min_max_label', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("4/4/2019" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/24/2025" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
            helper.waitUntillClickable(helper.applyButton_Xpath);
            await element(helper.endDateHeader_Xpath).click();
            expect(element(helper.startDateNexticon_Xpath).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.startDatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.endDateNexticon_Xpath).getAttribute("aria-disabled")).toContain("false");
            expect(element(helper.endDatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("true");
            browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with min_max_label3_' + themes[i]);
        });

        it('start and end date icon with min_max_label', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("4/4/2019" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/24/2045" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
            helper.waitUntillClickable(helper.applyButton_Xpath);
            await element(helper.startDateHeader_Xpath).click();
            expect(element(helper.startDateNexticon_Xpath).getAttribute("aria-disabled")).toContain("false");
            expect(element(helper.startDatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.endDateNexticon_Xpath).getAttribute("aria-disabled")).toContain("false");
            expect(element(helper.endDatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("true");
            browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with min_max_label4_' + themes[i]);
        });


         it('start and end date icon with min_max_text', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("4/4/2019" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/24/2025" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
            helper.waitUntillClickable(helper.applyButton_Xpath);
            expect(element(helper.endDateHeader_Xpath).getText()).toContain("May 2019");
            await element(helper.endDateHeader_Xpath).click();
            expect(element(helper.endDateHeader_Xpath).getText()).toContain("2019");
            await element(helper.endDateHeader_Xpath).click();
            expect(element(helper.endDateHeader_Xpath).getText()).toContain("2010 - 2019");
            browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with min_max_text_' + themes[i]);
        });

        it('start and end date icon with min_max_text2', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("4/4/2019" + Key.ENTER);
            await element(helper.max_Id).sendKeys("6/24/2025" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
            helper.waitUntillClickable(helper.applyButton_Xpath);
            expect(element(helper.startDateHeader_Xpath).getText()).toContain("April 2019");
            await element(helper.startDateHeader_Xpath).click();
            expect(element(helper.startDateHeader_Xpath).getText()).toContain("2019");
            await element(helper.startDateHeader_Xpath).click();
            expect(element(helper.startDateHeader_Xpath).getText()).toContain("2010 - 2019");
            browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with min_max_text_' + themes[i]);
        });

        it('start and end date icon with start_end', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.startDate_Id).sendKeys("4/4/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/24/2025" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
            helper.waitUntillClickable(helper.applyButton_Xpath);
            expect(element(helper.startDateHeader_Xpath).getText()).toContain("April 2019");
            expect(element(helper.endDateHeader_Xpath).getText()).toContain("June 2025");
            expect(element(helper.selectedDays_ClassName).getText()).toContain("2274 days");
            expect(element(helper.startDateLabel_ClassName).getText()).toContain("Apr 4, 2019");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("Jun 24, 2025");
            browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with start_end_1_' + themes[i]);
            await element(helper.startDateHeader_Xpath).click();
            await element(helper.endDateHeader_Xpath).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with start_end_2_' + themes[i]);
            await element(helper.endDateNexticon_Xpath).click();
            await element(helper.endDateNexticon_Xpath).click();
            expect(element(helper.endDateHeader_Xpath).getText()).toContain("2027");
            browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with start_end_3_' + themes[i]);
        });

        it('start and end date icon with start', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.startDate_Id).sendKeys("4/4/2019" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
            helper.waitUntillClickable(helper.applyButton_Xpath);
            expect(element(helper.startDateHeader_Xpath).getText()).toContain("April 2019");
            expect(element(helper.endDateHeader_Xpath).getText()).toContain("May 2019");
            expect(element(helper.selectedDays_ClassName).getText()).toContain("Selected Days");
            expect(element(helper.startDateLabel_ClassName).getText()).toContain("Apr 4, 2019");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("End Date");
            browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with start_1_' + themes[i]);

        });

        it('start and end date icon with start_end with clear', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.startDate_Id).sendKeys("4/4/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("6/24/2025" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
            helper.waitUntillClickable(helper.applyButton_Xpath);
            expect(element(helper.startDateHeader_Xpath).getText()).toContain("April 2019");
            expect(element(helper.endDateHeader_Xpath).getText()).toContain("June 2025");
            expect(element(helper.selectedDays_ClassName).getText()).toContain("2274 days");
            expect(element(helper.startDateLabel_ClassName).getText()).toContain("Apr 4, 2019");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("Jun 24, 2025");
            browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with start_end_with_clear_1_' + themes[i]);
            await element(helper.applyButton_Xpath).click();
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'start and end date icon with start_end_with_clear_1_input_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            await element(helper.dateRangeIcon_ClassName).click();
            expect(element(helper.selectedDays_ClassName).getText()).toContain("Selected Days");
            expect(element(helper.startDateLabel_ClassName).getText()).toContain("Start Date");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("End Date");
        });

        it('select a range using UI', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.startDate_Id).sendKeys("4/14/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("5/24/2019" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
            expect(element(helper.startDateLabel_ClassName).getText()).toContain("Apr 14, 2019");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("May 24, 2019");
            browser.compareScreen(element(By.id('dateRange_popup')), 'select a range using UI_1_' + themes[i]);
            element(By.xpath("//div[@class='e-left-container']//div[@class='e-content e-month']//tbody/tr/td[4]")).click();
            expect(element(helper.startDateLabel_ClassName).getText()).toContain("Apr 3, 2019");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("End Date");
            browser.compareScreen(element(By.id('dateRange_popup')), 'select a range using UI_2_' + themes[i]);
        });

        it('select a range using UI', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.startDate_Id).sendKeys("4/14/2019" + Key.ENTER);
            await element(helper.endDate_Id).sendKeys("5/24/2019" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
            browser.compareScreen(element(By.id('dateRange_popup')), 'select a range using UI_3_' + themes[i]);
            await element(helper.startDateHeader_Xpath).click();
            element(By.xpath("//div[@class='e-left-container']//div[@class='e-content e-year']//tbody/tr/td[1]")).click();
            expect(element(helper.startDateLabel_ClassName).getText()).toContain("Apr 14, 2019");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("May 24, 2019");
            element(By.xpath("//div[@class='e-left-container']//div[@class='e-content e-month']//tbody/tr/td[4]")).click();
            expect(element(helper.startDateLabel_ClassName).getText()).toContain("Jan 2, 2019");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("End Date");
            expect(element(helper.endDateHeader_Xpath).getText()).toContain("February 2019");
            browser.compareScreen(element(By.id('dateRange_popup')), 'select a range using UI_4_' + themes[i]);
        });

        it('min and max same date', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("4/4/2019" + Key.ENTER);
            await element(helper.max_Id).sendKeys("4/4/2019" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
            browser.compareScreen(element(By.id('dateRange_popup')), 'min and max same date_1_' + themes[i]);
            element(By.xpath("//div[@class='e-right-container']//div[@class='e-content e-month']//tbody/tr[1]/td[5]")).click();
            expect(element(helper.startDateLabel_ClassName).getText()).toContain("Apr 4, 2019");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("End Date");
            element(By.xpath("//div[@class='e-right-container']//div[@class='e-content e-month']//tbody/tr[1]/td[5]")).click();
            expect(element(helper.startDateLabel_ClassName).getText()).toContain("Apr 4, 2019");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("Apr 4, 2019");
            browser.compareScreen(element(By.id('dateRange_popup')), 'min and max same date_2_' + themes[i]);
        });

        it('min and max start date', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("1/4/2017" + Key.ENTER);
            await element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
            browser.compareScreen(element(By.id('dateRange_popup')), 'min and max startdate_1_' + themes[i]);
            element(By.xpath("//div[@class='e-left-container']//div[@class='e-content e-month']//tbody/tr[1]/td[6]")).click();
            expect(element(helper.startDateLabel_ClassName).getText()).toContain("Mar 2, 2018");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("End Date");
            expect(element(helper.startDateNexticon_Xpath).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.startDatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("false");
            expect(element(helper.endDateNexticon_Xpath).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.endDatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("true");
            browser.compareScreen(element(By.id('dateRange_popup')), 'min and max startdate_2_' + themes[i]);
        });

        it('Navigation-decadeView', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("1/4/2017" + Key.ENTER);
            await element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
            browser.compareScreen(element(By.id('dateRange_popup')), 'Navigation-decadeView_1_' + themes[i]);
            expect(element(helper.startDateHeader_Xpath).getText()).toContain("March 2018");
            await element(helper.startDateHeader_Xpath).click();
            expect(element(helper.startDateHeader_Xpath).getText()).toContain("2018");
            browser.compareScreen(element(By.id('dateRange_popup')), 'Navigation-decadeView_2_' + themes[i]);
            expect(element(helper.startDateNexticon_Xpath).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.startDatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("false");
            await element(helper.startDatePrevicon_Xpath).click();
            expect(element(helper.startDateNexticon_Xpath).getAttribute("aria-disabled")).toContain("false");
            expect(element(helper.startDatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("true");
            await element(helper.startDateHeader_Xpath).click();
            expect(element(helper.startDateHeader_Xpath).getText()).toContain("2010 - 2019");
            browser.compareScreen(element(By.id('dateRange_popup')), 'Navigation-decadeView_3_' + themes[i]);
            await element(By.className("e-focused-date")).click();
            await element(By.className("e-focused-date")).click();
            await element(By.xpath("//div[@class='e-left-container']//div[@class='e-content e-month']//tbody/tr[1]/td[6]")).click();
            browser.sleep(2000);
            expect(element(helper.startDateLabel_ClassName).getText()).toContain("Mar 3, 2017");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("End Date");
            expect(element(helper.endDateHeader_Xpath).getText()).toContain("April 2017");
            await element(helper.endDateHeader_Xpath).click();
            expect(element(helper.endDateHeader_Xpath).getText()).toContain("2017");
            await element(helper.endDateHeader_Xpath).click();
            expect(element(helper.endDateHeader_Xpath).getText()).toContain("2010 - 2019");
            await element(By.className("e-focused-date")).click();
            await element(By.xpath("//div[@class='e-right-container']//div[@class='e-content e-year']//tbody/tr[3]/td[4]")).click();
            browser.sleep(2000);
            await element(By.xpath("//div[@class='e-right-container']//div[@class='e-content e-month']//tbody/tr[1]/td[6]")).click();
            browser.sleep(2000);
            expect(element(helper.startDateLabel_ClassName).getText()).toContain("Mar 3, 2017");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("Dec 1, 2017");
            expect(element(helper.startDateNexticon_Xpath).getAttribute("aria-disabled")).toContain("false");
            expect(element(helper.startDatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("false");
            expect(element(helper.endDateNexticon_Xpath).getAttribute("aria-disabled")).toContain("false");
            expect(element(helper.endDatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("false");
            browser.compareScreen(element(By.id('dateRange_popup')), 'Navigation-decadeView_4_' + themes[i]);
            await element(helper.applyButtonClick_Xpath).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'Navigation-decadeView_5_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'Navigation-decadeView_6_' + themes[i]);
        });
        it('Navigation-decadeView', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("1/4/2017" + Key.ENTER);
            await element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
            expect(element(helper.startDateHeader_Xpath).getText()).toContain("March 2018");
            await element(helper.startDateHeader_Xpath).click();
            expect(element(helper.startDateHeader_Xpath).getText()).toContain("2018");
            browser.compareScreen(element(By.id('dateRange_popup')), 'Navigation-decadeView_7_' + themes[i]);
            expect(element(helper.startDateNexticon_Xpath).getAttribute("aria-disabled")).toContain("true");
            expect(element(helper.startDatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("false");
            await element(helper.startDateHeader_Xpath).click();
            expect(element(helper.startDateHeader_Xpath).getText()).toContain("2010 - 2019");
            browser.compareScreen(element(By.id('dateRange_popup')), 'Navigation-decadeView_8_' + themes[i]);
            await element(By.className("e-focused-date")).click();
            await element(By.className("e-focused-date")).click();
            browser.sleep(2000);
            await element(By.xpath("//div[@class='e-left-container']//div[@class='e-content e-month']//tbody/tr[1]/td[6]")).click();
            browser.sleep(2000);
            expect(element(helper.startDateLabel_ClassName).getText()).toContain("Mar 2, 2018");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("End Date");
            browser.compareScreen(element(By.id('dateRange_popup')), 'Navigation-decadeView_9_' + themes[i]);
            expect(element(helper.endDateHeader_Xpath).getText()).toContain("April 2018");
            await element(helper.endDateHeader_Xpath).click();
            expect(element(helper.endDateHeader_Xpath).getText()).toContain("2018");
            await element(By.xpath("//div[@class='e-right-container']//div[@class='e-content e-year']//tbody/tr[1]/td[1]")).click();
            browser.sleep(2000);
            await element(By.xpath("//div[@class='e-right-container']//div[@class='e-content e-month']//tbody/tr[1]/td[6]")).click();
            expect(element(helper.startDateLabel_ClassName).getText()).toContain("Jan 5, 2018");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("End Date");
            browser.compareScreen(element(By.id('dateRange_popup')), 'Navigation-decadeView_10_' + themes[i]);
            await element(By.xpath("//div[@class='e-right-container']//div[@class='e-content e-month']//tbody/tr[1]/td[7]")).click();
            expect(element(helper.startDateLabel_ClassName).getText()).toContain("Jan 5, 2018");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("Jan 6, 2018");
            browser.compareScreen(element(By.id('dateRange_popup')), 'Navigation-decadeView_11_' + themes[i]);
            await element(helper.applyButtonClick_Xpath).click();
            browser.compareScreen(element(By.className('e-date-range-wrapper')), 'Navigation-decadeView_12_' + themes[i]);
            await element(helper.clearIcon_ClassName).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'Navigation-decadeView_13_' + themes[i]);
        });
        it('Navigation-decadeView', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("1/4/2017" + Key.ENTER);
            await element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
            expect(element(helper.startDateHeader_Xpath).getText()).toContain("March 2018");
            await element(helper.startDateHeader_Xpath).click();
            expect(element(helper.startDateHeader_Xpath).getText()).toContain("2018");
            browser.compareScreen(element(By.id('dateRange_popup')), 'Navigation-decadeView_14_' + themes[i]);
            await element(helper.startDatePrevicon_Xpath).click();
            await element(helper.startDateHeader_Xpath).click();
            expect(element(helper.startDateHeader_Xpath).getText()).toContain("2010 - 2019");
            browser.sleep(2000);
            browser.compareScreen(element(By.id('dateRange_popup')), 'Navigation-decadeView_15_' + themes[i]);
            await element(By.className("e-focused-date")).click();
            await element(By.className("e-focused-date")).click();
            await element(By.xpath("//div[@class='e-left-container']//div[@class='e-content e-month']//tbody/tr[1]/td[6]")).click();
            browser.sleep(2000);
            expect(element(helper.startDateLabel_ClassName).getText()).toContain("Mar 3, 2017");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("End Date");
            expect(element(helper.endDateHeader_Xpath).getText()).toContain("April 2017");
            await element(helper.endDateHeader_Xpath).click();
            expect(element(helper.endDateHeader_Xpath).getText()).toContain("2017");
            await element(By.xpath("//div[@class='e-right-container']//div[@class='e-content e-year']//tbody/tr[1]/td[1]")).click();
            browser.sleep(2000);
            browser.compareScreen(element(By.id('dateRange_popup')), 'Navigation-decadeView_16_' + themes[i]);
            await element(helper.startDateHeader_Xpath).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'Navigation-decadeView_17_' + themes[i]);
        });

        it('StartDate with mindays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/2/2017 - 2/8/2017" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("12" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-left-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with mindays_' + themes[i]);
        });

        it('StartDate with mindays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/2/2017 - 2/8/2017" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("6" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-left-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with mindays2_' + themes[i]);
        });

        it('StartDate with mindays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("1/2/2017" + Key.ENTER);
            await element(helper.max_Id).sendKeys("1/28/2017" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("5" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-right-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with mindays_3' + themes[i]);
        });

        it('StartDate with maxdays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("1/2/2017" + Key.ENTER);
            await element(helper.max_Id).sendKeys("1/28/2017" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("4" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-right-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with maxdays_' + themes[i]);
        });

        it('StartDate with maxdays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("1/2/2017" + Key.ENTER);
            await element(helper.max_Id).sendKeys("1/28/2017" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("1" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-right-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with maxdays2_' + themes[i]);
        });

        it('StartDate with maxdays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("1/2/2017" + Key.ENTER);
            await element(helper.max_Id).sendKeys("1/25/2017" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("8" + Key.ENTER)
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-right-container']//div[@class='e-content e-month']//tbody/tr[2]/td[3]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with_maxdays3_' + themes[i]);
        });

        // it('StartDate with maxdays', async () => {
        //     await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path);
        //     await element(helper.value_Id).sendKeys("1/2/2017 - 2/8/2017" + Key.ENTER);
        //     await element(helper.maxDays_Id).sendKeys("12" + Key.ENTER);
        //     await element(helper.dateRangeIcon_ClassName).click();
        //     element(By.xpath("//div[@class='e-left-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
        //     browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with maxdays4_' + themes[i]);
        // });

        // it('StartDate with maxdays', async () => {
        //     await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path);
        //     await element(helper.value_Id).sendKeys("1/2/2017 - 2/8/2017" + Key.ENTER);
        //     await element(helper.maxDays_Id).sendKeys("4" + Key.ENTER);
        //     await element(helper.dateRangeIcon_ClassName).click();
        //     element(By.xpath("//div[@class='e-left-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
        //     browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with maxdays5_' + themes[i]);
        // });

        // it('StartDate with min and maxdays', async () => {
        //     await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path);
        //     await element(helper.value_Id).sendKeys("1/2/2017 - 2/8/2017" + Key.ENTER);
        //     await element(helper.minDays_Id).sendKeys("6" + Key.ENTER);
        //     await element(helper.maxDays_Id).sendKeys("12" + Key.ENTER);
        //     await element(helper.dateRangeIcon_ClassName).click();
        //     element(By.xpath("//div[@class='e-left-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
        //     browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with min_maxdays7_' + themes[i]);
        // });

        // it('StartDate with min and maxdays', async () => {
        //     await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path);
        //     await element(helper.value_Id).sendKeys("1/2/2017 - 2/8/2017" + Key.ENTER);
        //     await element(helper.minDays_Id).sendKeys("4" + Key.ENTER);
        //     await element(helper.maxDays_Id).sendKeys("14" + Key.ENTER);
        //     await element(helper.dateRangeIcon_ClassName).click();
        //     element(By.xpath("//div[@class='e-left-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
        //     browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with min_maxdays_' + themes[i]);
        // });
        // it('StartDate with min and maxdays', async () => {
        //     await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path);
        //     await element(helper.value_Id).sendKeys("1/2/2017 - 2/8/2017" + Key.ENTER);
        //     await element(helper.minDays_Id).sendKeys("4" + Key.ENTER);
        //     await element(helper.maxDays_Id).sendKeys("4" + Key.ENTER);
        //     await element(helper.dateRangeIcon_ClassName).click();
        //     element(By.xpath("//div[@class='e-left-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
        //     browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with min_maxdays2_' + themes[i]);
        // });

        // it('StartDate with min and maxdays', async () => {
        //     await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
        //     let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
        //     browser.executeScript(path);
        //     await element(helper.value_Id).sendKeys("1/2/2017 - 2/8/2017" + Key.ENTER);
        //     await element(helper.maxDays_Id).sendKeys("4" + Key.ENTER);
        //     await element(helper.minDays_Id).sendKeys("14" + Key.ENTER);
        //     await element(helper.dateRangeIcon_ClassName).click();
        //     element(By.xpath("//div[@class='e-left-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
        //     browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with min_maxdays3_' + themes[i]);
        // });


        it('StartDate with min and maxdays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("1/2/2017" + Key.ENTER);
            await element(helper.max_Id).sendKeys("1/10/2017" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("10" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("15" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-right-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with min_maxdays4_' + themes[i]);
        });

        it('StartDate with min and maxdays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("1/2/2017" + Key.ENTER);
            await element(helper.max_Id).sendKeys("1/10/2017" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("10" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("15" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-right-container']//div[@class='e-content e-month']//tbody/tr[2]/td[2]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with min_maxdays5_' + themes[i]);
        });

        it('StartDate with min and maxdays', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("1/2/2017" + Key.ENTER);
            await element(helper.max_Id).sendKeys("1/28/2017" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("10" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("15" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-right-container']//div[@class='e-content e-month']//tbody/tr[3]/td[3]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with min_maxdays6_' + themes[i]);
        });

        it('Check Cancel Button Works', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER);
            helper.openPopUp(); // Opens the daterange picekr popup
            helper.waitUntillClickable(helper.cancelButton_Xpath); //check for cancel buttton is present and then proceed to click
            element(helper.cancelButton_Xpath).click();
            browser.compareScreen(element(By.className('content-wrapper')), 'DateRange_Cancel_' + themes[i]);
        });

        it('Check for Apply Button is enabled after a Date been given as input in a picker', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/1/2017 - 2/8/2017" + Key.ENTER);
            helper.openPopUp(); // Opens the daterange picekr popup
            helper.waitUntillClickable(helper.applyButton_Xpath); //wait for apply buttton is present and then proceed to validate
            expect(element(helper.applyButton_Xpath).isDisplayed()).toBeTruthy();
        });

        it('click on prev icon of left container calender and verify it is working properly', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER);
            helper.openPopUp(); // Opens the daterange picekr popup
            helper.waitUntillClickable(helper.startDatePrevicon_Xpath); //wait for prev buttton is clickable
            element(helper.startDatePrevicon_Xpath).click();
            element(helper.startDatePrevicon_Xpath).click();
            element(helper.startDatePrevicon_Xpath).click(); // Navigate 3 times from Jan 2017 Oct 2016
            expect(element(helper.startDateHeader_Xpath).getText()).toContain("October 2016");
            browser.compareScreen(element(By.id('dateRange_popup')), 'Check_TitileAfterPrevNav_' + themes[i]);
        });

        it('Check inBetween ranges are selected from start to endate', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER);
            helper.openPopUp();
            helper.selectStartRange("Wednesday, January 11, 2017");
            element(helper.endDateNexticon_Xpath).click();
            element(helper.endDateNexticon_Xpath).click();
            helper.selectEndRange("Saturday, April 1, 2017");
            element(helper.endDatePrevicon_Xpath).click();
            helper.waitUntillClickable(helper.applyButton_Xpath);
            browser.compareScreen(element(By.id('dateRange_popup')), 'BetweenRangebyNav_1_' + themes[i]);
            element(helper.endDatePrevicon_Xpath).click();
            helper.waitUntillClickable(helper.applyButton_Xpath);
            browser.compareScreen(element(By.id('dateRange_popup')), 'BetweenRangebyNav_2_' + themes[i]);
        });

        it('Check Start Date Next Nav is Enabled after selecting endate and navigate next in EndDate Picker', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER);
            helper.openPopUp();
            helper.selectRange("Wednesday, January 11, 2017", "Sunday, January 15, 2017");
            element(helper.endDateNexticon_Xpath).click();
            expect(element(helper.startDateNexticon_Xpath).getAttribute("aria-disabled")).toContain("false");
            helper.waitUntillClickable(helper.applyButton_Xpath);
            browser.compareScreen(element(By.id('dateRange_popup')), 'Check_Nextnav_Onranges_' + themes[i]);
        });

        it('Select Range in Popup and Cancel:Then Validate previous set range is maintained in popup', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER);
            helper.openPopUp();
            helper.selectRange("Wednesday, January 11, 2017", "Sunday, January 15, 2017");
            helper.waitUntillClickable(helper.cancelButton_Xpath);
            element(helper.cancelButton_Xpath).click();
            helper.openPopUp();
            helper.waitUntillClickable(helper.applyButton_Xpath);
            browser.compareScreen(element(By.id('dateRange_popup')), 'CancelDateRange_afterselection_' + themes[i]);
        });

        it('Select startDate and validate startdate label for correct date selection', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER);
            helper.openPopUp();
            helper.selectStartRange("Wednesday, January 11, 2017");
            expect(element(helper.startDateLabel_ClassName).getText()).toContain("Jan 11, 2017");
            browser.compareScreen(element(By.className('e-range-header')), 'Startdate_Label_' + themes[i]);
        });

        it('Select startDate and validate enddate label for correct date selection', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER);
            helper.openPopUp();
            helper.selectStartRange("Wednesday, January 11, 2017");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("End Date");
        });

        it('Select endDate and validate enddate label for correct date selection', async () => {
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER);
            helper.openPopUp();
            helper.selectRange("Wednesday, January 11, 2017", "Sunday, January 15, 2017");
            expect(element(helper.endDateLabel_ClassName).getText()).toContain("Jan 15, 2017");
            browser.compareScreen(element(By.className('e-range-header')), 'StartEnddate_Label_' + themes[i]);
        });

            it('Select endDate and validate enddate label for correct date selection', async () => {
                browser.driver.manage().window().setSize(450, 600);
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click();
                helper.selectRange("Wednesday, January 11, 2017", "Sunday, January 15, 2017");
                expect(element(helper.mblEndDateLabel_ClassName).getText()).toContain("JAN 15, 2017");
                browser.compareScreen(element(By.className('e-range-header')), 'StartEnddate_Label_Mobile_' + themes[i]);
            });

          it('DateRangePicker_popup', async () => {
            browser.driver.manage().window().setSize(450, 800);
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.value_Id).sendKeys("1/5/2017 - 1/18/2017" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click();
                browser.compareScreen(element(By.id('dateRange_popup')), 'DateRangePicker_popup_Mobile_' + themes[i]);
            });


            it('Check Cancel Button Works', async () => {
                browser.driver.manage().window().setSize(450, 800);
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                helper.inputRange(helper.inputBox_Id, "1/1/2017 - 2/8/2017"); //set a range in input box since current date been maintained
                await element(helper.dateRangeIcon_ClassName).click();
                element(helper.cancelButton_Xpath).click();
                browser.compareScreen(element(By.className('e-control-wrapper')), 'DateRange_Cancel_' + themes[i]);
            });

            it('Check for Apply Button is enabled after a Date been given as input in a picker', async () => {
                browser.driver.manage().window().setSize(450, 800);
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                helper.inputRange(helper.inputBox_Id, "1/1/2017 - 2/8/2017"); //set a range in input box since current date been maintained
                await element(helper.dateRangeIcon_ClassName).click();
                helper.waitUntillClickable(helper.applyButton_Xpath); //wait for apply buttton is present and then proceed to validate
                expect(element(helper.applyButton_Xpath).isDisplayed()).toBeTruthy();
            });

            it('Check for right nav icon on left container is disabled after a Date been given as input in a picker', async () => {
                browser.driver.manage().window().setSize(450, 800);
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click();
                helper.waitUntillClickable(helper.applyButton_Xpath); //wait for apply buttton is present
                expect(element(helper.DateNexticon_Xpath).getAttribute("aria-disabled")).toContain("false");
                expect(element(helper.DatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("false");
                browser.compareScreen(element(By.id('dateRange_popup')), 'DateRange_Calender_mobile_' + themes[i]);
            });

            it('selected days count', async () => {
                browser.driver.manage().window().setSize(450, 800);
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER); //set a range in input box since current date been maintained
                await element(helper.dateRangeIcon_ClassName).click();
                helper.waitUntillClickable(helper.applyButton_Xpath); //wait for apply buttton is present
                expect(element(helper.selectedDays_ClassName).getText()).toContain("35 days");
                browser.compareScreen(element(By.id('dateRange_popup')), 'DateRange_selectedDays_' + themes[i]);
            });

            it('selected text labels', async () => {
                browser.driver.manage().window().setSize(450, 800)
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER); //set a range in input box since current date been maintained
                await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
                helper.waitUntillClickable(helper.applyButton_Xpath);
                expect(element(helper.selectedDays_ClassName).getText()).toContain("35 days");
                expect(element(helper.mblStartDateLabel_ClassName).getText()).toContain("JAN 5, 2017");
                expect(element(helper.mblEndDateLabel_ClassName).getText()).toContain("FEB 8, 2017");
                browser.compareScreen(element(By.id('dateRange_popup')), 'selected labels_mobile_' + themes[i]);
            });

            it('start and end date icon with min_max', async () => {
                browser.driver.manage().window().setSize(450, 800)
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
                await element(helper.min_Id).sendKeys("4/4/2019" + Key.ENTER);
                await element(helper.max_Id).sendKeys("5/24/2019" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
                helper.waitUntillClickable(helper.applyButton_Xpath);
                expect(element(helper.DateNexticon_Xpath).getAttribute("aria-disabled")).toContain("false");
                expect(element(helper.DatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("true");
                browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with min_max_monile_' + themes[i]);
            });

            it('start and end date icon with min_max', async () => {
                browser.driver.manage().window().setSize(450, 800)
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
                await element(helper.min_Id).sendKeys("4/4/2017" + Key.ENTER);
                await element(helper.value_Id).sendKeys("1/5/2019 - 2/8/2019" + Key.ENTER); //set a range in input box since current date been maintained
                await element(helper.max_Id).sendKeys("6/24/2025" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
                helper.waitUntillClickable(helper.applyButton_Xpath);
                expect(element(helper.DateNexticon_Xpath).getAttribute("aria-disabled")).toContain("false");
                expect(element(helper.DatePrevicon_Xpath).getAttribute("aria-disabled")).toContain("false");
                browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with min_max_mobile_2_' + themes[i]);
            });

             it('start and end date icon with min_max_text', async () => {
                browser.driver.manage().window().setSize(450, 800)
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
                await element(helper.min_Id).sendKeys("4/4/2019" + Key.ENTER);
                await element(helper.max_Id).sendKeys("6/24/2025" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
                helper.waitUntillClickable(helper.applyButton_Xpath);
                expect(element(helper.DateHeader_Xpath).getText()).toContain("April 2019");
                await element(helper.DateHeader_Xpath).click();
                expect(element(helper.DateHeader_Xpath).getText()).toContain("2019");
                await element(helper.DateHeader_Xpath).click();
                expect(element(helper.DateHeader_Xpath).getText()).toContain("2010 - 2019");
                browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with min_max_text_' + themes[i]);
            });

            it('start and end date icon with min_max_applyButton- need to check', async () => {
                browser.driver.manage().window().setSize(450, 800)
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
                await element(helper.min_Id).sendKeys("4/4/2019" + Key.ENTER);
                await element(helper.max_Id).sendKeys("6/24/2025" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
                helper.waitUntillClickable(helper.applyButton_Xpath);
                expect(element(helper.applyButton_Xpath).isEnabled).toBe(false);
                browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with min_max_applyButton_' + themes[i]);
            });

            it('start and end date icon with start_end', async () => {
                browser.driver.manage().window().setSize(450, 800)
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
                await element(helper.value_Id).sendKeys("4/4/2019 - 6/24/2025" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click();
                helper.waitUntillClickable(helper.applyButton_Xpath);
                expect(element(helper.DateHeader_Xpath).getText()).toContain("April 2019");
                expect(element(helper.selectedDays_ClassName).getText()).toContain("2274 days");
                expect(element(helper.mblStartDateLabel_ClassName).getText()).toContain("APR 4, 2019");
                expect(element(helper.mblEndDateLabel_ClassName).getText()).toContain("JUN 24, 2025");
                browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with start_end_1_mobile_' + themes[i]);
                await element(helper.DateHeader_Xpath).click();
                browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with start_end_2_mobile_' + themes[i]);
                await element(helper.DateNexticon_Xpath).click();
                await element(helper.DateNexticon_Xpath).click();
                expect(element(helper.DateHeader_Xpath).getText()).toContain("2021");
                browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with start_end_3_mobile_' + themes[i]);
            });

            it('start and end date icon with start', async () => {
                browser.driver.manage().window().setSize(450, 800)
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
                await element(helper.startDate_Id).sendKeys("4/4/2019" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
                helper.waitUntillClickable(helper.applyButton_Xpath);
                expect(element(helper.DateHeader_Xpath).getText()).toContain("April 2019");
                expect(element(helper.selectedDays_ClassName).getText()).toContain("Selected Days");
                expect(element(helper.mblStartDateLabel_ClassName).getText()).toContain("APR 4, 2019");
                expect(element(helper.mblEndDateLabel_ClassName).getText()).toContain("END DATE");
                browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with start_1_mobile_' + themes[i]);

            });

            it('start and end date icon with start_end with clear', async () => {
                browser.driver.manage().window().setSize(450, 800)
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
                await element(helper.startDate_Id).sendKeys("4/4/2019" + Key.ENTER);
                await element(helper.endDate_Id).sendKeys("6/24/2025" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
                expect(element(helper.DateHeader_Xpath).getText()).toContain("April 2019");
                expect(element(helper.selectedDays_ClassName).getText()).toContain("2274 days");
                expect(element(helper.mblStartDateLabel_ClassName).getText()).toContain("APR 4, 2019");
                expect(element(helper.mblEndDateLabel_ClassName).getText()).toContain("JUN 24, 2025");
                browser.compareScreen(element(By.id('dateRange_popup')), 'start and end date icon with start_end_with_clear_1_mobile_' + themes[i]);
                await element(helper.applyButtonClick_Xpath).click();
                browser.compareScreen(element(By.className('e-date-range-wrapper')), 'start and end date icon with start_end_with_clear_1_mobile_input_' + themes[i]);
                await element(helper.clearIcon_ClassName).click();
                await element(helper.dateRangeIcon_ClassName).click();
                expect(element(helper.selectedDays_ClassName).getText()).toContain("Selected Days");
                expect(element(helper.mblStartDateLabel_ClassName).getText()).toContain("START DATE");
                expect(element(helper.mblEndDateLabel_ClassName).getText()).toContain("END DATE");
            });

            it('select a range using UI', async () => {
                browser.driver.manage().window().setSize(450, 800)
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
                await element(helper.startDate_Id).sendKeys("4/14/2019" + Key.ENTER);
                await element(helper.endDate_Id).sendKeys("5/24/2019" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
                expect(element(helper.mblStartDateLabel_ClassName).getText()).toContain("APR 14, 2019");
                browser.compareScreen(element(By.id('dateRange_popup')), 'select a range using UI_1_mobile_' + themes[i]);
                element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr/td[4]")).click();
                expect(element(helper.mblStartDateLabel_ClassName).getText()).toContain("APR 3, 2019");
                expect(element(helper.mblEndDateLabel_ClassName).getText()).toContain("END DATE");
                browser.compareScreen(element(By.id('dateRange_popup')), 'select a range using UI_2_mobile_' + themes[i]);
            });

            it('select a range using UI', async () => {
                browser.driver.manage().window().setSize(450, 800)
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
                await element(helper.startDate_Id).sendKeys("4/14/2019" + Key.ENTER);
                await element(helper.endDate_Id).sendKeys("5/24/2019" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
                browser.compareScreen(element(By.id('dateRange_popup')), 'select a range using UI_3_mobile_' + themes[i]);
                await element(helper.DateHeader_Xpath).click();
                element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-year']//tbody/tr/td[1]")).click();
                expect(element(helper.mblStartDateLabel_ClassName).getText()).toContain("APR 14, 2019");
                expect(element(helper.mblEndDateLabel_ClassName).getText()).toContain("MAY 24, 2019");
                element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr/td[4]")).click();
                expect(element(helper.mblStartDateLabel_ClassName).getText()).toContain("JAN 2, 2019");
                expect(element(helper.mblEndDateLabel_ClassName).getText()).toContain("END DATE");
                expect(element(helper.DateHeader_Xpath).getText()).toContain("January 2019");
                browser.compareScreen(element(By.id('dateRange_popup')), 'select a range using UI_4_mobile_' + themes[i]);
            });

            it('select a range using UI', async () => {
                browser.driver.manage().window().setSize(450, 800);
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
                await element(helper.startDate_Id).sendKeys("4/14/2019" + Key.ENTER);
                await element(helper.endDate_Id).sendKeys("5/24/2019" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
                browser.compareScreen(element(By.id('dateRange_popup')), 'select a range using UI_5_mobile_' + themes[i]);
                await element(helper.DateHeader_Xpath).click();
                element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-year']//tbody/tr/td[1]")).click();
                expect(element(helper.mblStartDateLabel_ClassName).getText()).toContain("APR 14, 2019");
                expect(element(helper.mblEndDateLabel_ClassName).getText()).toContain("MAY 24, 2019");
                element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr/td[4]")).click();
                expect(element(helper.mblStartDateLabel_ClassName).getText()).toContain("JAN 2, 2019");
                expect(element(helper.mblEndDateLabel_ClassName).getText()).toContain("END DATE");
                expect(element(helper.DateHeader_Xpath).getText()).toContain("January 2019");
                await element(helper.DateNexticon_Xpath).click();
                expect(element(helper.DateHeader_Xpath).getText()).toContain("February 2019");
                browser.compareScreen(element(By.id('dateRange_popup')), 'select a range using UI_6_mobile_' + themes[i]);
            });

            it('min and max same date', async () => {
                browser.driver.manage().window().setSize(450, 800);
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
                await element(helper.min_Id).sendKeys("4/4/2019" + Key.ENTER);
                await element(helper.max_Id).sendKeys("4/4/2019" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
                browser.compareScreen(element(By.id('dateRange_popup')), 'min and max same date_1_mobile' + themes[i]);
                element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr[1]/td[5]")).click();
                expect(element(helper.mblStartDateLabel_ClassName).getText()).toContain("APR 4, 2019");
                expect(element(helper.mblEndDateLabel_ClassName).getText()).toContain("END DATE");
                element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr[1]/td[5]")).click();
                expect(element(helper.mblStartDateLabel_ClassName).getText()).toContain("APR 4, 2019");
                expect(element(helper.mblEndDateLabel_ClassName).getText()).toContain("APR 4, 2019");
                browser.compareScreen(element(By.id('dateRange_popup')), 'min and max same date_2_mobile_' + themes[i]);
            });

            it('Check Cancel Button Works', async () => {
                browser.driver.manage().window().setSize(450, 800);
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
                helper.waitUntillClickable(helper.cancelButton_Xpath); //check for cancel buttton is present and then proceed to click
                element(helper.cancelButton_Xpath).click();
                browser.compareScreen(element(By.className('content-wrapper')), 'DateRange_Cancel_mobile' + themes[i]);
            });

            it('Check for Apply Button is enabled after a Date been given as input in a picker', async () => {
                browser.driver.manage().window().setSize(450, 800);
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.value_Id).sendKeys("1/1/2017 - 2/8/2017" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click(); // Opens the daterange picekr popup
                helper.waitUntillClickable(helper.applyButton_Xpath); //wait for apply buttton is present and then proceed to validate
                expect(element(helper.applyButton_Xpath).isDisplayed()).toBeTruthy();
            });

            it('click on prev icon of left container calender and verify it is working properly', async () => {
                browser.driver.manage().window().setSize(450, 800);
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click();
                element(helper.DatePrevicon_Xpath).click();
                element(helper.DatePrevicon_Xpath).click();
                element(helper.DatePrevicon_Xpath).click();
                expect(element(helper.DateHeader_Xpath).getText()).toContain("October 2016");
                browser.compareScreen(element(By.id('dateRange_popup')), 'Check_TitileAfterPrevNav_mobile' + themes[i]);
            });

            it('Check inBetween ranges are selected from start to endate', async () => {
                browser.driver.manage().window().setSize(450, 800);
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click();
                element(helper.DateNexticon_Xpath).click();
                element(helper.DateNexticon_Xpath).click();
                element(helper.DatePrevicon_Xpath).click();
                expect(element(helper.DateHeader_Xpath).getText()).toContain("February 2017");
                browser.compareScreen(element(By.id('dateRange_popup')), 'Check_TitileAfterNextNav2_mobile' + themes[i]);
            });

            it('Check Start Date Next Nav is Enabled after selecting endate and navigate next in EndDate Picker', async () => {
                browser.driver.manage().window().setSize(450, 800);
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click();
                element(helper.DateNexticon_Xpath).click();
                expect(element(helper.DateNexticon_Xpath).getAttribute("aria-disabled")).toContain("false");
                helper.waitUntillClickable(helper.applyButton_Xpath);
                browser.compareScreen(element(By.id('dateRange_popup')), 'Check_Nextnav_Onranges_mobile' + themes[i]);
            });

            it('Select Range in Popup and Cancel:Then Validate previous set range is maintained in popup', async () => {
                browser.driver.manage().window().setSize(450, 800);
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click();
                helper.selectRange("Wednesday, January 11, 2017", "Sunday, January 15, 2017");
                helper.waitUntillClickable(helper.cancelButton_Xpath);
                element(helper.cancelButton_Xpath).click();
                await element(helper.dateRangeIcon_ClassName).click();
                helper.waitUntillClickable(helper.applyButton_Xpath);
                browser.compareScreen(element(By.id('dateRange_popup')), 'CancelDateRange_afterselection_mobile_' + themes[i]);
            });

            it('Select startDate and validate startdate label for correct date selection', async () => {
                browser.driver.manage().window().setSize(450, 800);
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click();
                helper.selectStartRange("Wednesday, January 11, 2017");
                expect(element(helper.mblStartDateLabel_ClassName).getText()).toContain("JAN 11, 2017");
                browser.compareScreen(element(By.className('e-range-header')), 'Startdate_Label_mobile_' + themes[i]);
            });

            it('Select startDate and validate enddate label for correct date selection', async () => {
                browser.driver.manage().window().setSize(450, 800);
                await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
                let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
                browser.executeScript(path);
                await element(helper.value_Id).sendKeys("1/5/2017 - 2/8/2017" + Key.ENTER);
                await element(helper.dateRangeIcon_ClassName).click();
                helper.selectStartRange("Wednesday, January 11, 2017");
                expect(element(helper.mblEndDateLabel_ClassName).getText()).toContain("END DATE");
            });

        it('StartDate with mindays', async () => {
            browser.driver.manage().window().setSize(500, 800);
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/2/2017 - 2/8/2017" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("12" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with mindays_mobile_' + themes[i]);
        });

        it('StartDate with mindays', async () => {
            browser.driver.manage().window().setSize(500, 800);
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/2/2017 - 2/8/2017" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("6" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with mindays2_mobile_' + themes[i]);
        });

        it('StartDate with mindays', async () => {
            browser.driver.manage().window().setSize(500, 800);
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("1/2/2017" + Key.ENTER);
            await element(helper.max_Id).sendKeys("1/28/2017" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("5" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with mindays_3_mobile_' + themes[i]);
        });

        it('StartDate with maxdays', async () => {
            browser.driver.manage().window().setSize(500, 800);
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("1/2/2017" + Key.ENTER);
            await element(helper.max_Id).sendKeys("1/28/2017" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("4" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with maxdays_mobile_' + themes[i]);
        });

        it('StartDate with maxdays', async () => {
            browser.driver.manage().window().setSize(500, 800);
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("1/2/2017" + Key.ENTER);
            await element(helper.max_Id).sendKeys("1/28/2017" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("1" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with maxdays2_mobile_' + themes[i]);
        });

        it('StartDate with maxdays', async () => {
            browser.driver.manage().window().setSize(500, 800);
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("1/2/2017" + Key.ENTER);
            await element(helper.max_Id).sendKeys("1/25/2017" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("8" + Key.ENTER)
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr[2]/td[3]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with_maxdays3_mobile_' + themes[i]);
        });

        it('StartDate with maxdays', async () => {
           browser.driver.manage().window().setSize(500, 800);
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/2/2017 - 2/8/2017" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("12" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with maxdays4_mobile_' + themes[i]);
        });

        it('StartDate with maxdays', async () => {
           browser.driver.manage().window().setSize(500, 800);
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/2/2017 - 2/8/2017" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("4" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with maxdays5_mobile_' + themes[i]);
        });

        it('StartDate with min and maxdays', async () => {
           browser.driver.manage().window().setSize(500, 800);
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/2/2017 - 2/8/2017" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("6" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("12" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with min_maxdays7_mobile_' + themes[i]);
        });

        it('StartDate with min and maxdays', async () => {
           browser.driver.manage().window().setSize(500, 800);
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/2/2017 - 2/8/2017" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("4" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("14" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with min_maxdays_mobile_' + themes[i]);
        });
        it('StartDate with min and maxdays', async () => {
           browser.driver.manage().window().setSize(500, 800);
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/2/2017 - 2/8/2017" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("4" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("4" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with min_maxdays2_mobile_' + themes[i]);
        });

        it('StartDate with min and maxdays', async () => {
           browser.driver.manage().window().setSize(500, 800);
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.value_Id).sendKeys("1/2/2017 - 2/8/2017" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("4" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("14" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with min_maxdays3_mobile_' + themes[i]);
        });


        it('StartDate with min and maxdays', async () => {
            browser.driver.manage().window().setSize(500, 800);
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("1/2/2017" + Key.ENTER);
            await element(helper.max_Id).sendKeys("1/10/2017" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("10" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("15" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr[2]/td[6]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with min_maxdays4_mobile_' + themes[i]);
        });

        it('StartDate with min and maxdays', async () => {
            browser.driver.manage().window().setSize(500, 800);
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("1/2/2017" + Key.ENTER);
            await element(helper.max_Id).sendKeys("1/10/2017" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("10" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("15" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr[2]/td[2]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with min_maxdays5_mobile_' + themes[i]);
        });

        it('StartDate with min and maxdays', async () => {
            browser.driver.manage().window().setSize(500, 800);
            await browser.get(browser.basePath + '/demos/dateRangePicker/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path);
            await element(helper.min_Id).clear(); await element(helper.max_Id).clear();
            await element(helper.min_Id).sendKeys("1/2/2017" + Key.ENTER);
            await element(helper.max_Id).sendKeys("1/28/2017" + Key.ENTER);
            await element(helper.minDays_Id).sendKeys("10" + Key.ENTER);
            await element(helper.maxDays_Id).sendKeys("15" + Key.ENTER);
            await element(helper.dateRangeIcon_ClassName).click();
            element(By.xpath("//div[@class='e-calendar-container']//div[@class='e-content e-month']//tbody/tr[3]/td[3]")).click();
            browser.compareScreen(element(By.id('dateRange_popup')), 'StartDate with min_maxdays6_mobile_' + themes[i]);
        });


    }
});