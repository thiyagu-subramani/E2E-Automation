import { browser, element, By, protractor } from "@syncfusion/ej2-base/e2e/index";



export class Helper {

  public pickerIcon_ClassName: object=By.className('e-input-group-icon');
  public nextDateIcon_ClassName: object = By.className('e-date-icon-next');
  public prevDateIcon_ClassName: object = By.className('e-date-icon-prev');
  public title_ClassName: object = By.className('e-title');
  // properties Id
  public persist_Id: object = By.id("grid_checkbox_42");
  public rtl_Id: object = By.id("grid_checkbox_43");
  public today_Id: object = By.id("grid_checkbox_44");
  public week_Id: object = By.id("grid_checkbox_45");
  public depth_Id: object = By.id("grid_input_46");
  public firstday_Id: object = By.id("grid_input_47");
  public locale_Id: object = By.id("grid_input_48");
  public max_Id: object = By.id("grid_input_49");
  public min_Id: object = By.id("grid_input_50");
  public start_Id: object = By.id("grid_input_51");
  public value_Id: object = By.id("grid_input_52");
  // methodes Id
  public destroy_Id: object = By.id("grid_btn_53");
  public persistDate_Id: object = By.id("grid_btn_54");
  public navigation_Id: object = By.id("grid_input_55");
  public view_Id: object = By.id("grid_input_56");

  public selected_ClassName:Object=By.className("e-cell e-selected");

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

  public waitForRtl() {
    var EC = protractor.ExpectedConditions;
    var elmToClick = element(By.xpath("//*[@id='grid_checkbox_43']"));
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
  public inputVal(elm: any, value: string) {
    this.waitUntillPresent(elm);
    element(elm).clear();
    element(elm).sendKeys(value, protractor.Key.ENTER);

  }





}