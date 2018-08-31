import { browser, element, By, protractor } from "@syncfusion/ej2-base/e2e/index";



export class Helper {

  public pickerIcon_ClassName: object=By.className('e-input-group-icon');
  public nextDateIcon_ClassName: object = By.className('e-date-icon-next');
  public prevDateIcon_ClassName: object = By.className('e-date-icon-prev');
  public title_ClassName: object = By.className('e-title');
  public footer_ClassName: object = By.className('e-footer');
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
   public value_Id: object = By.id("grid_input_18");
   public width_Id: object = By.id("grid_input_19");
   public zIndex_Id: object = By.id("grid_input_20");
   // methodes Id
   public show_Id: object = By.id("grid_btn_21");
   public hide_Id: object = By.id("grid_btn_22");
   public destroy_Id: object = By.id("grid_btn_23");
   public persistDate_Id: object = By.id("grid_btn_24");
   public navigate_Id: object = By.id("grid_btn_25");
   public view_Id: object = By.id("grid_btn_26");
   public focusIn_Id: object = By.id("grid_btn_27");
   public focusOut_Id: object = By.id("grid_btn_28");
   public blur_Id: object = By.id("grid_btn_29");

  public waitUntillClickable(elm: any) {
    var EC = protractor.ExpectedConditions;
    var elmToClick = element(elm);
    browser.wait(EC.elementToBeClickable(elmToClick), 2000);
  }

  public waitForNavigation_NextPrev(month: string) {
    var EC = protractor.ExpectedConditions;
    var elmToClick = element(By.xpath("(//*[contains(@class,'e-weekend')]/span[contains(@title,'" + month + "')])[last()]"));
    browser.wait(EC.elementToBeClickable(elmToClick), 2000);
  }


  public waitForNavigation_MonatandYear() {
    var EC = protractor.ExpectedConditions;
    var elmToClick = element(By.xpath("(//*[@class='e-day'])[last()]"));
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



}