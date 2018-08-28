import { browser, element, By, protractor } from "@syncfusion/ej2-base/e2e/index";



export class Helper {

  public pickerIcon_Classname: object = By.className('e-input-group-icon');
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

  public selected_ClassName: Object = By.className("e-cell e-selected");
}