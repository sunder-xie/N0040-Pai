/**
 * Created by yongli.chen on 2016/11/25.
 */
export class Activity {


  private selector:string = "activity";
  private template:string = "";
  private containerId:string = "";//装载组件的父ID
  private isSelectorLoaded:boolean  = false;
  private username:string = "";

  constructor(module:string,containerId:string) {
    this.containerId = containerId;
    this.template = './'+ module + '/' + this.selector + '.html';
    $.when($.ajax(this.template))
      .then((html)=> {
        $(containerId).html(html);
        this.isSelectorLoaded = true;
        this.init();
      }, (err)=> {
        console.log(err);
      });
  }

  public init(){
  }
}
