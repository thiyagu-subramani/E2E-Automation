import { browser, element, By, protractor } from "@syncfusion/ej2-base/e2e/index";

//let dateRangeIcon_ClassName:object = By.className('e-range-icon');
let cancelButton_Xpath = By.xpath("//button[contains(text(),'Cancel')]");

export class Helper {

  

  public applyButton_Xpath: object = By.xpath("//button[contains(text(),'Apply')]");
  public cancelButton_Xpath: object = By.xpath("//button[contains(text(),'Cancel')]");
  public inputBox_Id: object = By.id("dateRange");
  public startDatePrevicon_Xpath: object = By.xpath("//div[@class='e-left-container']//*[contains(@class,'e-prev')]");
  public startDateNexticon_Xpath: object = By.xpath("//div[@class='e-left-container']//*[contains(@class,'e-next')]");
  public endDatePrevicon_Xpath: object = By.xpath("//div[@class='e-right-container']//*[contains(@class,'e-prev')]");
  public endDateNexticon_Xpath: object = By.xpath("//div[@class='e-right-container']//*[contains(@class,'e-next')]");
  public startDateHeader_Xpath: object = By.xpath("//div[@class='e-left-container']//*[contains(@class,'e-title')]");
  public endDateHeader_Xpath: object = By.xpath("//div[@class='e-right-container']//*[contains(@class,'e-title')]");
  //mobile 
  public DatePrevicon_Xpath: object = By.xpath("//div[@class='e-calendar-container']//*[contains(@class,'e-prev')]");
  public DateNexticon_Xpath: object = By.xpath("//div[@class='e-calendar-container']//*[contains(@class,'e-next')]");
  public DateHeader_Xpath: object = By.xpath("//div[@class='e-calendar-container']//*[contains(@class,'e-title')]");
  public mblEndDateLabel_ClassName: Object = By.className("e-end-btn");
  public mblStartDateLabel_ClassName: Object = By.className("e-start-btn");
  public applyButtonClick_Xpath: object = By.xpath("//div[@class='e-footer']//*[contains(@class,'e-apply')]");

  public startDateLabel_ClassName: Object = By.className("e-start-label");
  public endDateLabel_ClassName: Object = By.className("e-end-label");
  public selectedDays_ClassName: Object = By.className("e-day-span");
  public dateRangeIcon_ClassName: object = By.className('e-range-icon');
  public dateRangePopup_Id: object = By.id("dateRange_popup");
  public clearIcon_ClassName : object = By.className('e-clear-icon');
  // properties Id
  public persist_Id: object = By.id("grid_checkbox_0");
  public rtl_Id: object = By.id("grid_checkbox_1");
  public enable_Id: object = By.id("grid_checkbox_2");
  public read_Id: object = By.id("grid_checkbox_3");
  public clear_Id: object = By.id("grid_checkbox_4");
  public strict_Id: object = By.id("grid_checkbox_5");
  public week_Id: object = By.id("grid_checkbox_6");
  public cssClass_Id: object = By.id("grid_input_7");
  public endDate_Id: object = By.id("grid_input_8");
  public firstDay_Id: object = By.id("grid_input_9");
  public floatLabel_Id: object = By.id("grid_select_10");
  public format_Id: object = By.id("grid_select_11");
  public locale_Id: object = By.id("grid_select_12");
  public max_Id: object = By.id("grid_input_13");
  public maxDays_Id: object = By.id("grid_input_14");
  public min_Id: object = By.id("grid_input_15");
  public minDays_Id: object = By.id("grid_input_16");
  public placeholder_Id: object = By.id("grid_input_17");
  public presets_Id: object = By.id("grid_input_18");
  public separator_Id: object = By.id("grid_input_19");
  public startDate_Id: object = By.id("grid_input_20");
  public value_Id: object = By.id("grid_input_21");
  public width_Id: object = By.id("grid_input_22");
  public zIndex_Id: object = By.id("grid_input_23");

  // methodes Id
  public show_Id: object = By.id("grid_btn_24");
  public hide_Id: object = By.id("grid_btn_25");
  public destroy_Id: object = By.id("grid_btn_26");
  public persistDate_Id: object = By.id("grid_btn_27");
  public focusIn_Id: object = By.id("grid_btn_28");
  public focusOut_Id: object = By.id("grid_btn_29");
  public blur_Id: object = By.id("grid_btn_30");

  public openPopUp() {
    this.waitUntillClickable(this.dateRangeIcon_ClassName);
    element(this.dateRangeIcon_ClassName).click();
  }

  public waitUntillClickable(elm: any) {
    var EC = protractor.ExpectedConditions;
    var elmToClick = element(elm);
    browser.wait(EC.elementToBeClickable(elmToClick), 2000);
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

  public inputRange(elm: any, value: string) {
    this.waitUntillPresent(elm);
    element(elm).clear();
    element(elm).sendKeys(value, protractor.Key.ENTER);

  }

  public selectRange(startRange: string, endRange: string) {
    this.waitUntillClickable(By.xpath("//*[@title='" + startRange + "']"));
    element(By.xpath("//*[@title='" + startRange + "']")).click();
    this.waitUntillClickable(By.xpath("//*[@title='" + endRange + "']"));
    element(By.xpath("//*[@title='" + endRange + "']")).click();
  }

  public selectStartRange(startRange: string) {
    this.waitUntillClickable(By.xpath("//*[@title='" + startRange + "']"));
    element(By.xpath("//*[@title='" + startRange + "']")).click();


  }
  public selectEndRange(endRange: string) {

    this.waitUntillClickable(By.xpath("//*[@title='" + endRange + "']"));
    element(By.xpath("//*[@title='" + endRange + "']")).click();

  }






}