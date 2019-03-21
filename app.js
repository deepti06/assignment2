(function(){
    angular.module("ShoppingListCheckOff",[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService){
        var ctrl1 = this;
        ctrl1.buyEmpty = function(){
            ctrl1.toBuy = ShoppingListCheckOffService.getToBuy();
            if(ctrl1.toBuy.length == 0)
                return true;
            return false;
        }
        ctrl1.toBuy = ShoppingListCheckOffService.getToBuy();
        ctrl1.shiftmsg = function (idx){
            ShoppingListCheckOffService.shiftmsg(idx);
        }
    }

    function AlreadyBoughtController(ShoppingListCheckOffService){
        var ctrl2 = this;
        ctrl2.boughtEmpty = function(){
            ctrl2.bought = ShoppingListCheckOffService.getBought();
            if(ctrl2.bought.length == 0)
                return true;
            return false;
        }
        ctrl2.bought = ShoppingListCheckOffService.getBought();
        
    }

    function ShoppingListCheckOffService(){
        var service = this;
        var toBuy = [], bought=[];
        
        toBuy = [
            {
                name : "Cookie",
                quantity: 10
            },
            {
                name: "Cake",
                quantity : 5
            },
            {
                name : "Cold Drinks",
                quantity :2
            },
            {
                name : "Fruits",
                quantity : 20
            },
            {
                name : "CupCakes",
                quantity : 10
            }
        ]
        this.getToBuy = function(){
            return toBuy;
        }

        this.getBought = function(){
            return bought;
        }


        this.shiftmsg = function(idx){
            
            bought.push(toBuy[idx]);
            toBuy.splice(idx,1);
        }

    }

})();