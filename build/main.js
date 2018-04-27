webpackJsonp([0],{

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 202;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_biller_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_biller_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_biller_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__overview_component__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(billerService, modalCtrl) {
        this.billerService = billerService;
        this.modalCtrl = modalCtrl;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.billerService.getBillers().subscribe(function (billers) {
            _this.billers = billers;
        });
    };
    HomeComponent.prototype.presentAddModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__add_biller_component__["a" /* AddBillerComponent */]);
        modal.present();
    };
    HomeComponent.prototype.presentEditModal = function (selectedBiller) {
        this.billerService.selectedBiller = selectedBiller;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__edit_biller_component__["a" /* EditBillerComponent */]);
        modal.present();
    };
    HomeComponent.prototype.presentMoneyOverviewModal = function () {
        this.billerService.currentBillers = this.billers;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__overview_component__["a" /* OverviewComponent */]);
        modal.present();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-home',
            template: "\n\t\n\t<ion-header>\n\t<ion-navbar>\n\t\t<ion-title>Billers Overview</ion-title>\n\t</ion-navbar>\n\t</ion-header>\n\n\t<ion-content padding oncontextmenu=\"return false;\">\n\n\t\t<!-- Alert for upcoming bills -->\n\n\t\t<!-- <app-reminder></app-reminder> -->\n\n\t\t<div *ngIf=\"billers?.length > 0;else noItems\">\n\n\n\t\t\t<!-- Cards list unpaid -->\n\t\t\t<div *ngFor=\"let biller of billers\">\n\t\t\t\t<div *ngIf=\"!biller.isPaid\">\n\t\t\t\t\t<app-biller-card [inputBiller]=\"biller\" (contextmenu)=\"presentEditModal(biller)\">\n\t\t\t\t\t</app-biller-card>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<hr>\n\n\t\t\t<!-- Cards list paid -->\n\n\t\t\t<div *ngFor=\"let biller of billers\">\n\t\t\t\t<div *ngIf=\"biller.isPaid\">\n\t\t\t\t\t<app-biller-card [inputBiller]=\"biller\" (contextmenu)=\"presentEditModal(biller)\">\n\t\t\t\t\t</app-biller-card>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\n\t\t<!-- Fab -->\n\t\t<ion-fab right bottom #fab>\n\t\t\t<button ion-fab color=\"primary\"><ion-icon name=\"arrow-dropup\"></ion-icon></button>\n\t\t\t<ion-fab-list side=\"top\" (click)=\"fab.close()\">\n\t\t\t\t<button ion-fab (click)=\"presentAddModal()\"><ion-icon name=\"add\"></ion-icon></button>\n\t\t\t\t<button ion-fab (click)=\"presentMoneyOverviewModal()\"><ion-icon name=\"trending-up\"></ion-icon></button>\n\t\t\t</ion-fab-list>\n\t\t</ion-fab>\n\n\t</ion-content>\n\n\t<ng-template #noItems>\n\t\t<hr>\n\t\t<h5>There are no billers in this list.</h5>\n\t</ng-template>\n\t\n\t",
            styles: ["\n\t\thr {\n\t\t\theight: 4px;\n\t\t}\n\t"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_biller_service__["a" /* BillerService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBillerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_biller_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_GoogleImageSearch_js__ = __webpack_require__(400);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddBillerComponent = /** @class */ (function () {
    function AddBillerComponent(viewCtrl, billerService) {
        this.viewCtrl = viewCtrl;
        this.billerService = billerService;
        this.newBiller = {
            title: 'Jackpot',
            imageUrl: 'https://dummyimage.com/mediumrectangle/222222/eeeeee',
            amount: 99,
            dayOfMonth: 1,
            isPaid: false
        };
    }
    AddBillerComponent.prototype.ngOnInit = function () {
    };
    AddBillerComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AddBillerComponent.prototype.onInput = function ($event) {
        if (this.searchTerm.length > 3) {
            this.makeAjaxRequest(this.searchTerm);
        }
    };
    AddBillerComponent.prototype.makeAjaxRequest = function (searchTerm) {
        var _this = this;
        // console.log('makeing ajax request')
        __WEBPACK_IMPORTED_MODULE_3__classes_GoogleImageSearch_js__["a" /* default */].searchImage(searchTerm)
            .then(function (res) {
            _this.foundImages = res;
            // this.searchIcon = "search"
            _this.newBiller.imageUrl = _this.foundImages[0];
        });
    };
    AddBillerComponent.prototype.addNewBiller = function (newBiller) {
        if (newBiller.title.length >= 3) {
            newBiller.amount *= 1;
            newBiller.dayOfMonth *= 1;
            this.billerService.addBiller(newBiller);
            this.closeModal();
        }
        else {
            alert("Please specify a title with at least 3 letters.");
        }
    };
    AddBillerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-add-biller',
            template: "\n\t\t<ion-header>\n\t<ion-navbar>\n\t\t<ion-title>Add Biller Modal</ion-title>\n\t\t<ion-buttons end>\n\t\t\t<button ion-button color=\"primary\" (click)=\"closeModal()\">Close</button>\n\t\t</ion-buttons>\n\t</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\t<ion-list>\n\n\t\t<ion-item>\n\t\t\t<ion-label fixed>Title</ion-label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"newBiller.title\"></ion-input>\n\t\t</ion-item>\n\n\t\t<ion-item>\n\t\t\t<ion-label fixed>Amount</ion-label>\n\t\t\t<ion-input type=\"number\" [(ngModel)]=\"newBiller.amount\"></ion-input>\n\t\t</ion-item>\n\n\t\t<ion-item>\n\t\t\t<ion-label fixed>Day of Month</ion-label>\n\t\t\t<ion-input type=\"number\" [(ngModel)]=\"newBiller.dayOfMonth\"></ion-input>\n\t\t</ion-item>\n\n\t\t<ion-item>\n\t\t\t<ion-label fixed>Image Url</ion-label>\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"newBiller.imageUrl\"></ion-input>\n\t\t</ion-item>\n\n\t\t<ion-searchbar placeholder='search google for image' [(ngModel)]=\"searchTerm\" debounce=500 (ionInput)=\"onInput($event)\">\n\t\t</ion-searchbar>\n\n\t</ion-list>\n\n\t<button ion-button block (click)=\"addNewBiller(newBiller)\">Add New Biller</button>\n\n\t<ion-card-content>\n\t\tPreview:\n\t</ion-card-content>\n\n\t<app-biller-card [inputBiller]=\"newBiller\"></app-biller-card>\n\n</ion-content>\n\t\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_biller_service__["a" /* BillerService */]])
    ], AddBillerComponent);
    return AddBillerComponent;
}());

//# sourceMappingURL=add-biller.component.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBillerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_biller_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditBillerComponent = /** @class */ (function () {
    function EditBillerComponent(viewCtrl, billerService, toastCtrl, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.billerService = billerService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.selectedBiller = {};
    }
    EditBillerComponent.prototype.ngOnInit = function () {
        Object.assign(this.selectedBiller, this.billerService.selectedBiller);
    };
    EditBillerComponent.prototype.check = function () {
        console.log(this.selectedBiller);
    };
    EditBillerComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    EditBillerComponent.prototype.updateSelectedBiller = function (selectedBiller) {
        if (selectedBiller.title.length >= 3) {
            selectedBiller.amount *= 1;
            selectedBiller.dayOfMonth *= 1;
            this.billerService.updateBiller(selectedBiller);
            this.closeModal();
        }
        else {
            alert('Title must be at least 3 letters');
        }
    };
    EditBillerComponent.prototype.deleteSelectedBiller = function (selectedBiller) {
        var _this = this;
        this.showConfirm("Are you sure that you want to delete: " + selectedBiller.title + "?").then(function (result) {
            if (result) {
                _this.billerService.deleteBiller(selectedBiller);
                _this.closeModal();
                var toast = _this.toastCtrl.create({
                    message: "Biller:" + selectedBiller.title + " was deleted successfully.",
                    duration: 3000
                });
                toast.present();
            }
        });
    };
    EditBillerComponent.prototype.showConfirm = function (message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.alertCtrl.create({
                title: 'Please confirm',
                message: message,
                buttons: [
                    {
                        text: 'No',
                        handler: function (_) { return resolve(false); }
                    },
                    {
                        text: 'Yes',
                        handler: function (_) { return resolve(true); }
                    }
                ]
            }).present();
        });
    };
    EditBillerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-edit-biller',
            template: "\n  \n\t<ion-header>\n\t\t<ion-navbar>\n\t\t\t<ion-title>Edit Biller Modal</ion-title>\n\t\t\t<ion-buttons end>\n\t\t\t\t<button ion-button color=\"primary\" (click)=\"closeModal()\">Close</button>\n\t\t\t</ion-buttons>\n\t\t</ion-navbar>\n\t</ion-header>\n\n\t<ion-content padding>\n\n\t\t<ion-list>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label fixed>Title</ion-label>\n\t\t\t\t<ion-input type=\"text\" [(ngModel)]=\"selectedBiller.title\"></ion-input>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\n\t\t\t\t<ion-label fixed>Amount</ion-label>\n\t\t\t\t<ion-input type=\"number\" [(ngModel)]=\"selectedBiller.amount\"></ion-input>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label fixed>Day of Month</ion-label>\n\t\t\t\t<ion-input type=\"number\" [(ngModel)]=\"selectedBiller.dayOfMonth\"></ion-input>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label fixed>Image Url</ion-label>\n\t\t\t\t<ion-input type=\"text\" [(ngModel)]=\"selectedBiller.imageUrl\"></ion-input>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label fixed>Paid Status</ion-label>\n\t\t\t\t<ion-toggle [(ngModel)]=\"selectedBiller.isPaid\" color=\"secondary\"></ion-toggle>\n\t\t\t</ion-item>\n\n\t\t</ion-list>\n\n\t\t<button ion-button block (click)=\"updateSelectedBiller(selectedBiller)\">Update Selected Biller</button>\n\n\t\t<ion-card-content>\n\t\t\tPreview:\n\t\t</ion-card-content>\n\n\t\t<app-biller-card [inputBiller]=\"selectedBiller\"></app-biller-card>\n\n\t\t<button ion-button color=\"danger\" block (click)=\"deleteSelectedBiller(selectedBiller)\" float-end>Delete Selected Biller</button>\n\n\n\n\t</ion-content>\n \n \n ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_biller_service__["a" /* BillerService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditBillerComponent);
    return EditBillerComponent;
}());

//# sourceMappingURL=edit-biller.component.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_biller_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(viewCtrl, billerService, toastCtrl, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.billerService = billerService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.monthlyIncome = 2630;
    }
    OverviewComponent.prototype.ngOnInit = function () {
        this.billers = this.billerService.currentBillers;
    };
    Object.defineProperty(OverviewComponent.prototype, "getMonthlyAmountBills", {
        get: function () {
            var amountAllBills = 0;
            for (var _i = 0, _a = this.billers; _i < _a.length; _i++) {
                var biller = _a[_i];
                amountAllBills += biller.amount;
            }
            return amountAllBills;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverviewComponent.prototype, "getMonthlyMoneyLeft", {
        get: function () {
            var moneyLeft = 0;
            moneyLeft = this.monthlyIncome - this.getMonthlyAmountBills;
            return moneyLeft;
        },
        enumerable: true,
        configurable: true
    });
    OverviewComponent.prototype.presentEditModalIncome = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Monthly Income: " + this.monthlyIncome,
            inputs: [
                {
                    name: 'monthlyIncome',
                    placeholder: 'monthly income',
                    value: "" + this.monthlyIncome,
                    type: 'number'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.monthlyIncome = data.monthlyIncome;
                    }
                }
            ]
        });
        alert.present();
    };
    OverviewComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-overview',
            template: "\n\t\t<ion-header>\n\t<ion-navbar>\n\t\t<ion-title>Overview V0.3</ion-title>\n\t\t<ion-buttons end>\n\t\t\t<button ion-button color=\"primary\" (click)=\"closeModal()\">Close</button>\n\t\t</ion-buttons>\n\t</ion-navbar>\n\t</ion-header>\n\n\t<ion-content padding oncontextmenu=\"return false;\">\n\n\t<ion-card>\n\n\t\t<ion-item (contextmenu)=\"presentEditModalIncome()\">\n\t\t\t<ion-icon name=\"add\" item-left large style=\"color:green\"></ion-icon>\n\t\t\t<h2>Monthly Income:</h2>\n\t\t\t<p><span>$</span>{{monthlyIncome}}</p>\n\t\t</ion-item>\n\n\t\t<ion-item>\n\t\t\t<ion-icon name=\"remove\" item-left large style=\"color:red\"></ion-icon>\n\t\t\t<h2>Monthly amount for bills:</h2>\n\t\t\t<p><span>$</span>{{getMonthlyAmountBills}}</p>\n\t\t</ion-item>\n\n\t\t<hr>\n\n\t\t<ion-item>\n\t\t\t<ion-icon name=\"arrow-forward\" item-left large color=\"primary\"></ion-icon>\n\t\t\t<h2>Monthly money left:</h2>\n\t\t\t<p><span>$</span>{{getMonthlyMoneyLeft.toFixed(2)}}</p>\n\t\t</ion-item>\n\n\t</ion-card>\n\n\t<app-notification></app-notification>\n\n\t</ion-content>\n \n "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_biller_service__["a" /* BillerService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OverviewComponent);
    return OverviewComponent;
}());

//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(282);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_component__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_add_biller_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_biller_card_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_edit_biller_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_reminder_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_notification_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_biller_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_overview_component__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__components_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_add_biller_component__["a" /* AddBillerComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_biller_card_component__["a" /* BillerCardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_edit_biller_component__["a" /* EditBillerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_reminder_component__["a" /* ReminderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_notification_component__["a" /* NotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_overview_component__["a" /* OverviewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* credentials */].firebase, 'angularfs'),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__components_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_add_biller_component__["a" /* AddBillerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_edit_biller_component__["a" /* EditBillerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_overview_component__["a" /* OverviewComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__services_biller_service__["a" /* BillerService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return credentials; });
var credentials = {
    firebase: {
        apiKey: "AIzaSyCJXGDc2kvyJSOSzu_hvhS64sHDnyKn_qE",
        authDomain: "billersapp.firebaseapp.com",
        databaseURL: "https://billersapp.firebaseio.com",
        projectId: "billersapp",
        storageBucket: "billersapp.appspot.com",
        messagingSenderId: "5384173140"
    }
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_component__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyApp = /** @class */ (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__components_home_component__["a" /* HomeComponent */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //   statusBar.styleDefault();
            //   splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-nav [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class GoogleImageSearch {

	/**
	 * Function for image search
	 *
	 * @param  {string} query   Image search filed query
	 * @return {Promise}        Returns a promise, with an array of found image URL's
	 */
  static searchImage(query) {
    query = encodeURIComponent(query)

    const uri = `https://cors-anywhere.herokuapp.com/https://www.google.com/search?source=lnms&sa=X&gbv=1&tbm=isch&q=${query}`

    let h = new Headers()
    h.append("Accept", "application/json")
    h.append("Accept", "application/xml")
    h.append("Accept", "application/text")
    h.append("Accept", "application/html")

    let req = new Request(uri, {
      method: "GET",
      headers: h,
      mode: "cors"
    })

    return new Promise((resolve, reject) => {

      // Fetches Items from Google Image Search URL
      fetch(req)
        .then(res => res.text())
        .then(res => {

          // Transforms HTML string into DOM object
          let parser = new DOMParser()
          parser = parser.parseFromString(res, "text/html")

          // Gets DOM element with image results
          let images = parser.getElementById("ires").childNodes[0]

          if (images.nodeName === "DIV") {

            resolve(this.googleGetMobile(images))
          } else if (images.nodeName === "TABLE") {

            resolve(this.googleGetDesktop(images))
          } else {

            reject("Unknown System")
          }

        })
        .catch(err => reject(err))
    })
  }

	/**
	 * Traverses DOM tree in mobile layout
	 *
	 * @param  {NodeList} images    Children of "ires" container
	 * @return {Array}              Array of found images URL's
	 */
  static googleGetMobile(images) {

    // Transforms DOM NodeList of images into Array.
    // Needed to use .map method
    images = Array.from(images.childNodes)

    // Maps Image Sources
    return images.map((imgDiv) => {
      console.log(imgDiv.getAttribute("href"));
      return imgDiv.childNodes[0].src
    })
  }

	/**
	 * Traverses DOM tree in desktop layout
	 *
	 * @param  {NodeList} images    Children of "ires" container
	 * @return {Array}              Array of found images URLs
	 */
  static googleGetDesktop(images) {

    // NodeList of table rows
    images = images.childNodes[0].childNodes

    // Empty List of image URLs
    let imgSrc = []

    // Traverses table node for images
    images.forEach((tRow) => {
      tRow = tRow.childNodes
      tRow.forEach((tCol) => {
        let aLink = tCol.childNodes[0].childNodes[0]
        imgSrc.push(aLink.src)
      })
    })

    return imgSrc
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = GoogleImageSearch;


/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillerCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BillerCardComponent = /** @class */ (function () {
    function BillerCardComponent() {
        this.inputBiller = {};
    }
    BillerCardComponent.prototype.ngOnInit = function () {
    };
    BillerCardComponent.prototype.setPriceClasses = function () {
        var classes = {
            isPaid: this.inputBiller.isPaid,
            isNotPaid: !this.inputBiller.isPaid
        };
        return classes;
    };
    BillerCardComponent.prototype.setCardClasses = function () {
        var classes = {
            isPaidStripe: this.inputBiller.isPaid,
            isNotPaidStripe: !this.inputBiller.isPaid
        };
        return classes;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BillerCardComponent.prototype, "inputBiller", void 0);
    BillerCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-biller-card',
            template: "\n\t\t<ion-card [ngClass]=\"setCardClasses()\">\n\t\t\t<div class=\"card-biller-due\">\n\t\t\t{{inputBiller.dayOfMonth}}\n\t\t\t</div>\n\t\t\t<div class=\"card-biller-image\">\n\t\t\t<img [src]=\"inputBiller.imageUrl\" />\n\t\t\t</div>\n\t\t\t<div class=\"card-biller-title\">\n\t\t\t{{inputBiller.title}}\n\t\t\t</div>\n\t\t\t<div class=\"card-biller-price\" [ngClass]=\"setPriceClasses()\">\n\t\t\t<span>$</span>{{inputBiller.amount}}\n\t\t\t</div>\n\t\t</ion-card>\n\t",
            styles: ["\n  \n\t.isPaid{\n\t\tcolor: green;\n\t\ttext-decoration: line-through;\n\t  }\n\t  \n\t  .isNotPaid{\n\t\tcolor: red;\n\t\tfont-weight: bold;\n\t  }\n\t  \n\t  .isPaidStripe{\n\t\tborder-right: 3px solid green;\n\t  }\n\t  \n\t  .isNotPaidStripe{\n\t\tborder-right: 3px solid red;\n\t  }\n\t  \n\t  ion-card{\n\t\t  display: grid;\n\t\t  grid-template-columns: 1fr 2fr 2fr 1fr;\n\t\t  grid-template-areas: 'card-biller-due card-biller-image card-biller-title card-biller-price';\n\t\t  padding-right: 10px;\n\t\t  min-width: 250px;\n\t\t  min-height: 120px;\n\t  }\n\t  \n\t\t.card-biller-due{\n\t\t  color: rgba(0,0,0,.54);\n\t\t  font-size: 16px;\n\t\t  grid-area: card-biller-due;\n\t\t  justify-self: center;\n\t\t  align-self: center;\n\t\t}\n\t  \n\t\t.card-biller-image{\n\t\t  width: 90px;\n\t\t  grid-area: card-biller-image;\n\t\t  justify-self: start;\n\t\t  align-self: center;\n\t\t}\n\t  \n\t\t.card-biller-title{\n\t\t  font-size: 16px;\n\t\t  grid-area: card-biller-title;\n\t\t  justify-self: start;\n\t\t  align-self: center;\n\t\t}\n\t  \n\t\t.card-biller-price{\n\t\t  font-size: 16px;\n\t\t  grid-area: card-biller-price;\n\t\t  justify-self:end;\n\t\t  align-self: center;\n\t\t}\n\t\n\t"]
        }),
        __metadata("design:paramtypes", [])
    ], BillerCardComponent);
    return BillerCardComponent;
}());

//# sourceMappingURL=biller-card.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReminderComponent = /** @class */ (function () {
    function ReminderComponent() {
        this.level = 'information-circle';
    }
    ReminderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ReminderComponent.prototype, "level", void 0);
    ReminderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-reminder',
            template: "\n\t\t<ion-card>\n\t\t\t<ion-icon name='information-circle'></ion-icon>\n\t\t\t<div class=\"description\">\n\t\t\tThis is a reminder...test\n\t\t\t</div>\n\t\t</ion-card>\n \t",
            styles: ["\n\t\tion-card{\n\t\t\tmin-height: 40px;\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: 40px 1fr;\n\t\t\tgrid-template-areas: 'symbol description description';\n\t\t\tbackground: rgba(239, 10, 10, 0.72); \n\t\t\tcolor: white;\n\t\t}\n\t\t\n\t\tion-icon{\n\t\t\tgrid-area: symbol;\n\t\t\t/* padding-left: 16px; */\n\t\t\tjustify-self:center;\n\t\t\talign-self: center;\n\t\t}\n\t\t\n\t\t.description{\n\t\t\tgrid-area: description;\n\t\t\tjustify-self:start;\n\t\t\talign-self: center;\n\t\t}\n\t\t\n\t\t.due-today{\n\t\t\tbackground-color: red;\n\t\t}\n\t"]
        }),
        __metadata("design:paramtypes", [])
    ], ReminderComponent);
    return ReminderComponent;
}());

//# sourceMappingURL=reminder.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () {
        console.log('init notification component');
    };
    NotificationComponent.prototype.enableNotifications = function () {
        console.log('This will be implemented soon using a service worker.');
    };
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-notification',
            template: "\n\t\t<button ion-button block (click)=\"enableNotifications()\">Enable Notifications</button>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());

//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BillerService = /** @class */ (function () {
    function BillerService(afs) {
        this.afs = afs;
        this.selectedBiller = {};
        this.currentBillers = [];
        this.billerCollection = this.afs.collection('billers', function (ref) { return ref.orderBy('dayOfMonth', 'asc'); });
        this.billers = this.billerCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }
    BillerService.prototype.getBillers = function () {
        return this.billers;
    };
    BillerService.prototype.addBiller = function (biller) {
        this.billerCollection.add(biller);
    };
    BillerService.prototype.updateBiller = function (updatedBiller) {
        this.billerCollection.doc(updatedBiller.id).update(updatedBiller);
    };
    BillerService.prototype.deleteBiller = function (biller) {
        this.billerCollection.doc(biller.id).delete();
    };
    BillerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], BillerService);
    return BillerService;
}());

//# sourceMappingURL=biller.service.js.map

/***/ })

},[264]);
//# sourceMappingURL=main.js.map