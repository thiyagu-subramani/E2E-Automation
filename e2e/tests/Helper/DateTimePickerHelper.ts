import { browser, element, By, protractor } from "@syncfusion/ej2-base/e2e/index";

export class Helper {

  //public dateIcon_ClassName: object = By.className('e-date-icon');
  //public timeIcon_ClassName: object = By.className('e-time-icon');
  public inputBox_Id: object = By.id("datetimepicker");
  public todayButton_Xpath: object = By.xpath("//button[contains(@class,'e-today')]");
  public Previcon_Xpath: object = By.xpath("//div[contains(@class,'e-calendar')]//*[contains(@class,'e-prev')]");
  public Nexticon_Xpath: object = By.xpath("//div[contains(@class,'e-calendar')]//*[contains(@class,'e-next')]");
  public DateTitle_Xpath: object = By.xpath("//div[contains(@class,'e-calendar')]//*[contains(@class,'e-title')]");
  public timePickerPopupOpen_Xpath: object = By.xpath("//*[contains(@class,'e-popup-open')]");
  public datePickerPopupOpen_Xpath: object = By.xpath("//*[contains(@class,'e-popup-open')]");
  public title_ClassName: object = By.className('e-title');

  public dateIcon_className: object = By.className('e-date-icon');
  public timeIcon_className: object = By.className('e-time-icon');
  public  clearIcon_ClassName : object = By.className('e-clear-icon');

  // properties Id
  public persist_Id: object = By.id("grid_checkbox_0");
  public rtl_Id: object = By.id("grid_checkbox_1");
  public enable_Id: object = By.id("grid_checkbox_2");
  public read_Id: object = By.id("grid_checkbox_3");
  public clear_Id: object = By.id("grid_checkbox_4");
  public today_Id: object = By.id("grid_checkbox_5");
  public strict_Id: object = By.id("grid_checkbox_6");
  public week_Id: object = By.id("grid_checkbox_7");
  public cssClass_Id: object = By.id("grid_input_8");
  public depth_Id: object = By.id("grid_select_9");
  public firstDay_Id: object = By.id("grid_input_10");
  public floatLabel_Id: object = By.id("grid_select_11");
  public format_Id: object = By.id("grid_select_12");
  public locale_Id: object = By.id("grid_select_13");
  public max_Id: object = By.id("grid_input_14");
  public min_Id: object = By.id("grid_input_15");
  public placeholder_Id: object = By.id("grid_input_16");
  public start_Id: object = By.id("grid_select_17");
  public step_Id: object = By.id("grid_input_18");
  public timeFormat_Id: object = By.id("grid_select_19");
  public value_Id: object = By.id("grid_input_20");
  public width_Id: object = By.id("grid_input_21");
  public zIndex_Id: object = By.id("grid_input_22");

  // methodes Id

  public destroy_Id: object = By.id("grid_btn_23");
  public persistDate_Id: object = By.id("grid_btn_24");
  public navigate_Id: object = By.id("grid_btn_25");
  public view_Id: object = By.id("grid_btn_26");
  public focusIn_Id: object = By.id("grid_btn_27");
  public focusOut_Id: object = By.id("grid_btn_28");
  public blur_Id: object = By.id("grid_btn_29");
  public show_Id: object = By.id("grid_btn_30");
  public hide_Id: object = By.id("grid_btn_31");


  public waitUntillClickable(elm: any) {
    var EC = protractor.ExpectedConditions;
    var elmToClick = element(elm);
    browser.wait(EC.elementToBeClickable(elmToClick), 2000);
  }

  public inputVal(elm: any, value: string) {
    this.waitUntillPresent(elm);
    element(elm).clear();
    element(elm).sendKeys(value, protractor.Key.ENTER);

  }

  public waitUntillPresent(elm: any) {
    var EC = protractor.ExpectedConditions;
    var elmt = element(elm);
    browser.wait(EC.presenceOf(elmt), 2000);
  }

  public waitUntillinvisibilityOf(elm: any) {
    var EC = protractor.ExpectedConditions;
    var elmt = element(elm);
    browser.wait(EC.invisibilityOf(elmt), 3000);
  }

  public waitForNavigation_MonatandYear() {
    var EC = protractor.ExpectedConditions;
    var elmToClick = element(By.xpath("(//*[@class='e-day'])[last()]"));
    browser.wait(EC.elementToBeClickable(elmToClick), 2000);
  }

  public waitForNavigation_NextPrev(month: string) {
    var EC = protractor.ExpectedConditions;
    var elmToClick = element(By.xpath("(//*[contains(@class,'e-weekend')]/span[contains(@title,'" + month + "')])[last()]"));
    browser.wait(EC.elementToBeClickable(elmToClick), 2000);
  }
}