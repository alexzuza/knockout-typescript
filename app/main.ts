import * as ko from "knockout";

class AppModel {
  name = 'my knockout application'
}

ko.applyBindings(new AppModel(), document.getElementById('app'));