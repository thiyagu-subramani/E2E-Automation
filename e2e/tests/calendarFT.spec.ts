import { browser, element, Key, By, by, protractor } from "@syncfusion/ej2-base/e2e/index";
import { Helper } from "./Helper/CalendarHelper";
import { Property, queryParams } from "@syncfusion/ej2-base";

var helper: Helper = new Helper();

//var event = new Event('change');
let themes: String[] = ["material", "fabric", "bootstrap", "highcontrast"];
describe('Calendar', function () {
    for (let i = 0; i < themes.length; i++) {
        let fileName: string = 'https://cdn.syncfusion.com/ej2/ej2-calendars/styles/' + themes[i] + '.css';
        it('Default calendar', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_default_' + themes[i]);
                done();
            });
        });

        it('Calendar with RTL', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_' + themes[i]);
                done();
            });
        });

        it('Calendar with RTL and WeekNumber', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.week_Id).click();
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Week_' + themes[i]);
                done();
            });
        });

        it('Calendar with RTL and Today', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.today_Id).click();
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Today_' + themes[i]);
                done();
            });
        });

        it('Calendar with RTL Depth', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.depth_Id).clear();
                element(helper.depth_Id).sendKeys("Year" + Key.ENTER);
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Depth_' + themes[i]);
                element(helper.selected_ClassName).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Depth_navigate_Year_' + themes[i]);
                done();
            });
        });

        it('Calendar with RTL and Start', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Start_Decade_' + themes[i]);
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Start_Year_' + themes[i]);
                done();
            });
        });

        it('Calendar with RTL and Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("4/4/2045" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Min_' + themes[i]);
                done();
            });
        })
        it('Calendar with RTL and Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.min_Id).sendKeys("5/4/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Min_Value_' + themes[i]);
                done();
            });
        })
        it('Calendar with RTL and Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.value_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.min_Id).sendKeys("5/24/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Min_Value_2_' + themes[i]);
                done();
            });
        })
        it('Calendar with RTL and Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.value_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.min_Id).sendKeys("5/14/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Min_Value_3_' + themes[i]);
                done();
            });
        })
        it('Calendar with RTL and Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.value_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2014" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Min_Value_4_' + themes[i]);

                done();
            });
        });

        it('Calendar with RTL and Value', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.value_Id).sendKeys("4/4/1111" + Key.ENTER);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_outOfValue_' + themes[i])
                browser.sleep(2000);
                done();
            });
        });

        it('Calendar with RTL and Value', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.value_Id).sendKeys("5/14/9999" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_outOfValue_2_' + themes[i]);
                done();
            });
        });

        it('Calendar with RTL and Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Max_' + themes[i]);
                done();
            });
        });
        it('Calendar with RTL and Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.max_Id).sendKeys("5/24/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Max_Value_' + themes[i]);
                done();
            });
        });
        it('Calendar with RTL and Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.value_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.max_Id).sendKeys("4/4/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Max_Value_2_' + themes[i]);
                done();
            });
        });
        it('Calendar with RTL and Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.value_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.max_Id).sendKeys("5/14/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Max_Value_3_' + themes[i]);
                done();
            });
        });
        it('Calendar with RTL and Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.value_Id).clear();
                element(helper.value_Id).sendKeys("3/14/2015" + Key.ENTER);
                element(helper.max_Id).sendKeys("5/14/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Max_Value_4_' + themes[i]);
                done();
            });
        });

        it('Calendar with RTL and Min_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.max_Id).sendKeys("4/24/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Max_Min_' + themes[i]);
                done();
            });
        });

        it('Calendar with RTL and Min_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Max_min_2_' + themes[i]);
                done();
            });
        });

        it('Calendar with RTL and Min_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.value_Id).sendKeys("4/4/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Max_Min_3_' + themes[i]);
                done();
            });
        });

        it('Calendar with RTL and Min_>_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2019" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Max_Min_4_' + themes[i]);
                done();
            });
        });

        it('Calendar with RTL and FirstDayOfWeek', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.firstday_Id).sendKeys("2" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Fdow_' + themes[i]);
                done();
            });
        });
        it('Calendar with RTL and FirstDayOfWeek', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.firstday_Id).sendKeys("3" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Fdow_2_' + themes[i]);
                done();
            });
        });
        it('Calendar with RTL and FirstDayOfWeek', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.firstday_Id).sendKeys("4" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Fdow_3_' + themes[i]);
                done();
            });
        });
        it('Calendar with RTL and FirstDayOfWeek', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.firstday_Id).sendKeys("5" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Fdow_4_' + themes[i]);
                done();
            });
        });
        it('Calendar with RTL and FirstDayOfWeek', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.firstday_Id).sendKeys("6" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_RTL_Fdow_5_' + themes[i]);
                done();
            });
        });

        it('Calendar with WeekNumber', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_' + themes[i]);
                done();
            });
        });

        it('Calendar with WeekNumber and TodayButton', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.today_Id).click();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_week_today_' + themes[i]);
                done();
            });
        });

        it('Calendar with weekNumber and Depth', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.depth_Id).clear();
                element(helper.depth_Id).sendKeys("Year" + Key.ENTER);
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_Depth_' + themes[i]);
                element(helper.selected_ClassName).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_Depth_navigate_Year_' + themes[i]);
                done();
            });
        });

        it('Calendar with weekNumber and Start', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_Start_Decade_' + themes[i]);
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_Start_Year_' + themes[i]);
                done();
            });
        });

        it('Calendar with weekNumber and Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.rtl_Id).click();
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("4/4/2045" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_Min_' + themes[i]);
                done();
            });
        });
        it('Calendar with weekNumber and Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.min_Id).sendKeys("5/4/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_Min_Value_' + themes[i]);
                done();
            });
        });
        it('Calendar with weekNumber and Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.value_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.min_Id).sendKeys("5/24/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_Min_Value_2_' + themes[i]);
                done();
            });
        });
        it('Calendar with weekNumber and Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.value_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.min_Id).sendKeys("5/14/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_Min_Value_3_' + themes[i]);
                done();
            });
        });
        it('Calendar with weekNumber and Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.value_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2014" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_Min_Value_4_' + themes[i]);

                done();
            });
        });

        it('Calendar with weekNumber and Value', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.value_Id).sendKeys("4/4/1111" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_outOfValue_' + themes[i])
                done();
            });
        });

        it('Calendar with weekNumber and Value', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.value_Id).sendKeys("5/14/9999" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_outOfValue_2_' + themes[i]);
                done();
            });
        });

        it('Calendar with weeknumber and Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_Max_' + themes[i]);
                done();
            });
        });
        it('Calendar with weeknumber and Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.max_Id).sendKeys("5/24/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_Max_Value_' + themes[i]);
                done();
            });
        });
        it('Calendar with weeknumber and Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.value_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.max_Id).sendKeys("4/4/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_Max_Value_2_' + themes[i]);
                done();
            });
        });
        it('Calendar with weeknumber and Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.value_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.max_Id).sendKeys("5/14/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_Max_Value_3_' + themes[i]);
                done();
            });
        });
        it('Calendar with weeknumber and Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.value_Id).clear();
                element(helper.value_Id).sendKeys("3/14/2015" + Key.ENTER);
                element(helper.max_Id).sendKeys("5/14/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_Max_Value_4_' + themes[i]);
                done();
            });
        });

        it('Calendar with weeknumber and FirstDayOfWeek', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.firstday_Id).sendKeys("2" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_Fdow_' + themes[i]);
                done();
            });
        });
        it('Calendar with weeknumber and FirstDayOfWeek', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.firstday_Id).sendKeys("3" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_Fdow_2_' + themes[i]);
                done();
            });
        });
        it('Calendar with weeknumber and FirstDayOfWeek', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.firstday_Id).sendKeys("4" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_Fdow_3_' + themes[i]);
                done();
            });
        });
        it('Calendar with weeknumber and FirstDayOfWeek', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.firstday_Id).sendKeys("5" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_Fdow_4_' + themes[i]);
                done();
            });
        });
        it('Calendar with weeknumber and FirstDayOfWeek', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.firstday_Id).sendKeys("6" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weekNumber_Fdow_5_' + themes[i]);
                done();
            });
        });

        it('Calendar with weeknumber and Min_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.max_Id).sendKeys("4/24/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weeknumber_Max_Min_' + themes[i]);
                done();
            });
        });

        it('Calendar with weeknumber and Min_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weeknumber_Max_min_2_' + themes[i]);
                done();
            });
        });

        it('Calendar with weeknumber and Min_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.value_Id).sendKeys("4/4/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weeknumber_Max_Min_3_' + themes[i]);
                done();
            });
        });

        it('Calendar with weeknumber and Min_>_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.week_Id).click();
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2019" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_weeknumber_Max_Min_4_' + themes[i]);
                done();
            });
        });

        it('Calendar with Todaybutton', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_today_' + themes[i]);
                done();
            });
        });

        it('Calendar with todayButton and Depth', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.depth_Id).clear();
                element(helper.depth_Id).sendKeys("Year" + Key.ENTER);
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Depth_' + themes[i]);
                element(helper.selected_ClassName).click();
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Depth_navigate_Year_' + themes[i]);
                done();
            });
        });

        it('Calendar with todayButton and Start', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Start_Decade_' + themes[i]);
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Start_Year_' + themes[i]);
                done();
            });
        });

        it('Calendar with todayButton and Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("4/4/2045" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Min_' + themes[i]);
                done();
            });
        });
        it('Calendar with todayButton and Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.min_Id).sendKeys("5/4/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Min_Value_' + themes[i]);
                done();
            });
        });
        it('Calendar with todayButton and Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.value_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.min_Id).sendKeys("5/24/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Min_Value_2_' + themes[i]);
                done();
            });
        });
        it('Calendar with todayButton and Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.value_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.min_Id).sendKeys("5/14/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Min_Value_3_' + themes[i]);
                done();
            });
        });
        it('Calendar with todayButton and Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.min_Id).clear();
                element(helper.value_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2014" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Min_Value_4_' + themes[i]);
                done();
            });
        });

        it('Calendar with todayButton and Value', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.value_Id).sendKeys("4/4/1111" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_outOfValue_' + themes[i])
                done();
            });
        });

        it('Calendar with todayButton and Value', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.value_Id).sendKeys("5/14/9999" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_outOfValue_2_' + themes[i]);
                done();
            });
        });

        it('Calendar with todayButton and Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.max_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Max_' + themes[i]);
                done();
            });
        });

        it('Calendar with todayButton and Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.max_Id).sendKeys("5/24/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Max_Value_' + themes[i]);
                done();
            });
        });

        it('Calendar with todayButton and Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.value_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.max_Id).sendKeys("4/4/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Max_Value_2_' + themes[i]);
                done();
            });
        });

        it('Calendar with todayButton and Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.value_Id).clear();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.max_Id).sendKeys("5/14/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Max_Value_3_' + themes[i]);
                done();
            });
        });

        it('Calendar with todayButton and Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.value_Id).clear();
                element(helper.value_Id).sendKeys("3/14/2015" + Key.ENTER);
                element(helper.max_Id).sendKeys("5/14/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Max_Value_4_' + themes[i]);
                done();
            });
        });

        it('Calendar with todayButton and FirstDayOfWeek', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.firstday_Id).sendKeys("2" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Fdow_' + themes[i]);
                done();
            });
        });
        it('Calendar with todayButton and FirstDayOfWeek', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.firstday_Id).sendKeys("3" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Fdow_2_' + themes[i]);
                done();
            });
        });
        it('Calendar with todayButton and FirstDayOfWeek', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.firstday_Id).sendKeys("4" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Fdow_3_' + themes[i]);
                done();
            });
        });
        it('Calendar with todayButton and FirstDayOfWeek', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.firstday_Id).sendKeys("5" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Fdow_4_' + themes[i]);
                done();
            });
        });
        it('Calendar with todayButton and FirstDayOfWeek', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.value_Id).sendKeys("5/14/2015" + Key.ENTER);
                element(helper.firstday_Id).sendKeys("6" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Fdow_5_' + themes[i]);
                done();
            });
        });

        it('Calendar with todayButton and Min_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.min_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.max_Id).sendKeys("4/24/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Max_Min_' + themes[i]);
                done();
            });
        });

        it('Calendar with todayButton and Min_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Max_min_2_' + themes[i]);
                done();
            });
        });

        it('Calendar with todayButton and Min_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.value_Id).sendKeys("4/4/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Max_Min_3_' + themes[i]);
                done();
            });
        });

        it('Calendar with todayButton and Min_>_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.today_Id).click();
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2019" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_todayButton_Max_Min_4_' + themes[i]);
                done();
            });
        });


        it('Calendar with Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.min_Id).clear();
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2045" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2045" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Min_' + themes[i]);
                done();
            });
        });
        it('Calendar with Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.min_Id).clear();
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                element(helper.min_Id).sendKeys("7/4/2045" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2045" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Min_2_' + themes[i]);
                done();
            });
        });
        it('Calendar with Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.min_Id).clear();
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                element(helper.min_Id).sendKeys("7/4/2015" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Min_3_' + themes[i]);
                done();
            });
        });
        it('Calendar with Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.min_Id).clear();
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                element(helper.min_Id).sendKeys("7/4/2015" + Key.ENTER);
                element(helper.value_Id).sendKeys("7/4/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Min_4_' + themes[i]);
                done();
            });
        });
        it('Calendar with Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.min_Id).clear();
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                element(helper.min_Id).sendKeys("7/4/2015" + Key.ENTER);
                element(helper.value_Id).sendKeys("7/4/2016" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Min_5_' + themes[i]);
                done();
            });
        });
        it('Calendar with Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.min_Id).clear();
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2045" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Min_6_' + themes[i]);
                done();
            });
        });

        it('Calendar with Min and Value', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                element(helper.value_Id).sendKeys("4/4/1111" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_outOfValue_year_' + themes[i])
                done();
            });
        });

        it('Calendar with Min and Value', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/14/9999" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_outOfValue_year_2_' + themes[i]);
                done();
            });
        });

        it('Calendar with Max_Year', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.min_Id).clear();
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                element(helper.max_Id).sendKeys("4/4/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Max_' + themes[i]);
                done();
            });
        });
        it('Calendar with Max_Year', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.max_Id).clear();
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                element(helper.max_Id).sendKeys("4/4/2045" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2045" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Max_1_' + themes[i]);
                done();
            });
        });
        it('Calendar with Max_Year', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.max_Id).clear();
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                element(helper.max_Id).sendKeys("7/4/2045" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2045" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Max_2_' + themes[i]);
                done();
            });
        });
        it('Calendar with Max_Year', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.max_Id).clear();
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                element(helper.max_Id).sendKeys("7/4/2015" + Key.ENTER);
                element(helper.value_Id).sendKeys("7/4/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Max_3_' + themes[i]);
                done();
            });
        });
        it('Calendar with Max_year', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.max_Id).clear();
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                element(helper.max_Id).sendKeys("7/4/2015" + Key.ENTER);
                element(helper.value_Id).sendKeys("7/4/2014" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Max_4_' + themes[i]);
                done();
            });
        });

        it('Calendar with Min_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Max_min_2_' + themes[i]);
                done();
            });
        });

        it('Calendar with Min_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2022" + Key.ENTER);
                element(helper.min_Id).sendKeys("6/4/2022" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Max_min_decade_' + themes[i]);
                done();
            });
        });

        it('Calendar with Min_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.value_Id).sendKeys("4/4/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Max_Min_3_' + themes[i]);
                done();
            });
        });

        it('Calendar with Min_>_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Year" + Key.ENTER);
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2019" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Max_Min_4_' + themes[i]);
                done();
            });
        });

        it('Calendar with Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.min_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2042" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2045" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Min_decade_' + themes[i]);
                done();
            });
        });
        it('Calendar with Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.min_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.min_Id).sendKeys("7/4/2047" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2042" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Min_decade_2_' + themes[i]);
                done();
            });
        });
        it('Calendar with Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.min_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.min_Id).sendKeys("7/4/2015" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Min_decade_3_' + themes[i]);
                done();
            });
        });
        it('Calendar with Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.min_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.min_Id).sendKeys("7/4/2015" + Key.ENTER);
                element(helper.value_Id).sendKeys("7/4/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Min_decade_4_' + themes[i]);
                done();
            });
        });
        it('Calendar with Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.min_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.min_Id).sendKeys("7/4/2015" + Key.ENTER);
                element(helper.value_Id).sendKeys("7/4/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Min_decade_5_' + themes[i]);
                done();
            });
        });
        it('Calendar with Min', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.min_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2045" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Min_6_' + themes[i]);
                done();
            });
        });

        it('Calendar with Min and Value', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.value_Id).sendKeys("4/4/1111" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_outOfValue_decade_' + themes[i])
                done();
            });
        });

        it('Calendar with Min and Value', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/14/9999" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_outOfValue_decade_2_' + themes[i]);
                done();
            });
        });

        it('Calendar with Max_Decade', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.min_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.max_Id).sendKeys("4/4/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Max_' + themes[i]);
                done();
            });
        });

        it('Calendar with Max_Decade', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.max_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.max_Id).sendKeys("4/4/2040" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2045" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Max_1_' + themes[i]);
                done();
            });
        });
        it('Calendar with Max_Decade', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.max_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.max_Id).sendKeys("7/4/2045" + Key.ENTER);
                element(helper.value_Id).sendKeys("5/5/2040" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Max_2_' + themes[i]);
                done();
            });
        });
        it('Calendar with Max_Decade', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.max_Id).clear();
                element(helper.value_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.max_Id).sendKeys("7/4/2015" + Key.ENTER);
                element(helper.value_Id).sendKeys("7/4/2015" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Max_3_' + themes[i]);
                done();
            });
        });
        it('Calendar with Max_Decade', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.max_Id).clear();
                element(helper.value_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.max_Id).sendKeys("7/4/2015" + Key.ENTER);
                element(helper.value_Id).sendKeys("7/4/2014" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Max_4_' + themes[i]);
                done();
            });
        });

        it('Calendar with Min_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2022" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2020" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Max_min_decade_' + themes[i]);
                done();
            });
        });

        it('Calendar with Min_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Max_min_decade_2_' + themes[i]);
                done();
            });
        });

        it('Calendar with Min_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.value_Id).sendKeys("4/4/2018" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Max_Min_decade_3_' + themes[i]);
                done();
            });
        });

        it('Calendar with Min_>_Max', function (done) {
            browser.get(browser.basePath + '/demos/calendar/index.html');
            let path: string = "((document.getElementsByTagName('head')[0]).querySelector('link')).setAttribute('href','" + fileName + "')";
            browser.executeScript(path).then(function () {
                element(helper.start_Id).clear();
                element(helper.start_Id).sendKeys("Decade" + Key.ENTER);
                element(helper.max_Id).clear();
                element(helper.min_Id).clear();
                element(helper.max_Id).sendKeys("4/4/2018" + Key.ENTER);
                element(helper.min_Id).sendKeys("4/4/2020" + Key.ENTER);
                browser.sleep(2000);
                browser.compareScreen(element(By.id('calendar')), 'Calendar_with_Max_Min_decade_4_' + themes[i]);
                done();
            });
        });
    }
})
