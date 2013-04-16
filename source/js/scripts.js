var s,
PrimaryNameSpace = {

  settings : {
    basicExample: $('.main'),
    nestedExample : {
      first: true,
      second: true,
      third: true,
      fourth: true,
      fifth : ['one', 'two', 'three', 'four', 'five', 'six']
    },

    foo: 'bar'

  },

  init: function () {
    s = this.settings;

    this.nextMethod();
    this.anotherMethod();
  },

  nextMethod: function () {
  },

  anotherMethod: function () {
  }

};


$(function () {
  PrimaryNameSpace.init();
});
