import { browser, element, By, protractor } from "@syncfusion/ej2-base/e2e/index";

//let dateRangeIcon_ClassName:object = By.className('e-range-icon');
let cancelButton_Xpath = By.xpath("//button[contains(text(),'Cancel')]");

export class Helper {

  public timePickerIcon_ClassName: object = By.className('e-input-group-icon');
  public timePickerPopupOpen_Xpath: object = By.xpath("//*[contains(@class,'e-popup-open')]");
  public timePickerInputBox_ClassName: object = By.className('e-input-group');
  public timePickerInput_Id: object = By.id("timepicker");
  public clearIcon_ClassName : object = By.className('e-clear-icon');
// properties Id
public persist_Id: object = By.id("grid_checkbox_0");
public rtl_Id: object = By.id("grid_checkbox_1");
public enable_Id: object = By.id("grid_checkbox_2");
public read_Id: object = By.id("grid_checkbox_3");
public clear_Id: object = By.id("grid_checkbox_4");
public strict_Id: object = By.id("grid_checkbox_5");

public cssClass_Id: object = By.id("grid_input_6");
public floatLabel_Id: object = By.id("grid_select_7");
public format_Id: object = By.id("grid_select_8");
public locale_Id: object = By.id("grid_select_9");
public max_Id: object = By.id("grid_input_10");
public min_Id: object = By.id("grid_input_11");
public placeholder_Id: object = By.id("grid_input_12");
public scrollTo_Id: object = By.id("grid_input_13");
public step_Id: object = By.id("grid_input_14");
public value_Id: object = By.id("grid_input_15");
public width_Id: object = By.id("grid_input_16");
public zIndex_Id: object = By.id("grid_input_17");

// methodes Id
public show_Id: object = By.id("grid_btn_18");
public hide_Id: object = By.id("grid_btn_19");
public destroy_Id: object = By.id("grid_btn_20");
public persistDate_Id: object = By.id("grid_btn_21");
public focusIn_Id: object = By.id("grid_btn_22");
public focusOut_Id: object = By.id("grid_btn_23");
public blur_Id: object = By.id("grid_btn_24");

public openPopUp() {
    this.waitUntillClickable(this.timePickerIcon_ClassName);
    element(this.timePickerIcon_ClassName).click();
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

  public inputTime(elm: any, value: string) {
    this.waitUntillPresent(elm);
    element(elm).clear();
    element(elm).sendKeys(value, protractor.Key.ENTER);

  }

  public selectTime_FromPopup(popupId: string, value: string) {
   
    this.waitUntillClickable(By.xpath("//*[@id='"+popupId+"']//*[@data-value='"+value+"']"));
    element(By.xpath("//*[@id='"+popupId+"']//*[@data-value='"+value+"']")).click();
    this.waitUntillinvisibilityOf(By.xpath("//*[@id='"+popupId+"']//*[@data-value='"+value+"']"));
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