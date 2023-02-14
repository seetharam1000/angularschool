(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parent\">\n    <div *ngIf=\"!edit\">\n        <div class=\"imageDiv\">\n            <img src=\"../../assets/images/class.jpg\" width=\"100%\" height=\"100%\" alt=\"Italian Trulli\">\n            <table class=\"boxContent\">\n                <mat-toolbar-row>\n                    <marquee class=\"news\">\n                        <img src=\"../../assets/images/new.png\" width=\"5%\" height=\"5%\" alt=\"Italian Trulli\">{{news}}</marquee>\n                </mat-toolbar-row>\n                <tr>\n                    <h2 class=\"centerTitle\">{{title}}</h2>\n                </tr>\n                <br>\n                <tr>\n                    <p class=\"justify\">{{description}}</p>\n                </tr>\n            </table>\n        </div>\n        <div *ngIf=\"showedit\">\n            <button style=\"position: absolute; right: 0; margin-right: 3em; margin-top: 2em; \" mat-fab color=\"accent\" (click)=\"editHome()\">\n            <mat-icon class=\"mat-18\">edit</mat-icon>\n        </button>\n        </div>\n    </div>\n    <div *ngIf=\"edit\" class=\"centerDiv\">\n        <mat-card class=\"formCSS\">\n            <form [formGroup]=\"aboutForm\" enctype='multipart/form-data' #formDirective=\"ngForm\" (ngSubmit)=\"onSubmit(formDirective);\">\n                <div hidden>\n                    <input matInput formControlName=\"id\">\n                </div>\n\n                <div class=\"profileImageDiv\">\n                    <div class=\"image-upload\">\n                        <label for=\"file-input\">\n                        <img class=\"imgBorder\"  [src]=\"imgURL\" (error)=\"setDefaultPic($event)\">\n                        <img class=\"uploading\" src=\"/assets/images/upload.png\"/>\n                    </label>\n                        <input id=\"file-input\" #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\" />\n                    </div>\n                </div>\n\n                <mat-form-field>\n                    <mat-label>Title</mat-label>\n                    <input matInput formControlName=\"title\" autocomplete=\"on\" required>\n                    <mat-error>Enter the title</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <mat-label>Description</mat-label>\n                    <textarea matInput formControlName=\"description\" autocomplete=\"on\" required></textarea>\n                    <mat-error>Enter the description</mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <mat-label>News</mat-label>\n                    <input matInput formControlName=\"news\" autocomplete=\"on\" required>\n                </mat-form-field>\n\n                <div class=\"buttonDiv\">\n                    <button mat-raised-button color=\"primary\" class=\"fullButtonCSS\" [disabled]=\"aboutForm.invalid \">Update</button>\n                    <div class=\"space\"></div>\n                    <a mat-raised-button color=\"warn\" class=\"fullButtonCSS\" (click)=\"cancel()\">Cancel</a>\n                </div>\n            </form>\n        </mat-card>\n    </div>\n</div>\n<app-spinner></app-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admission/admission.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admission/admission.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"admissionContent\">\n    <div class=\"admissionDiv\">\n        <button style=\"cursor: pointer;\" mat-raised-button color=\"warn\" (click)=\"onlineRegisteration('','add')\">Online Registration</button>&nbsp;&nbsp;&nbsp;\n        <div *ngIf=\"viewRegister\">\n            <button style=\"cursor: pointer;\" mat-raised-button color=\"primary\" (click)=\"getStudentOnlineRegistrations()\">View Registrations</button>\n        </div>\n        <div *ngIf=\"editHeader\" class=\"editBtnDiv\">\n            <button mat-fab color=\"accent\" (click)=\"editAdmissionHeader()\">\n            <mat-icon class=\"mat-18\">edit</mat-icon>\n        </button>\n        </div>\n    </div>\n    <div class=\"matParent\">\n        <table class=\"tableDiv\">\n            <tr>\n                <td>\n                    <h2 class=\"centerCard\">{{title}}</h2>\n                    <br>\n                    <p class=\"justify\">{{description}}</p>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <h3>{{procedures_title}}</h3>\n                    <br>\n                    <p class=\"justify\">{{procedures_description}}</p>\n                </td>\n            </tr>\n        </table>\n    </div>\n</div>\n<div *ngIf=\"descriptionHeader\" class=\"centerDiv\">\n    <mat-card class=\"formCSS\">\n        <form [formGroup]=\"admissionForm\" #formDirective=\"ngForm\" (ngSubmit)=\"onSubmit(formDirective);\">\n            <mat-form-field>\n                <mat-label>Title</mat-label>\n                <input matInput formControlName=\"title\" autocomplete=\"on\" required>\n                <mat-error>Enter the title</mat-error>\n            </mat-form-field>\n            <mat-form-field>\n                <mat-label>Description</mat-label>\n                <textarea matInput formControlName=\"description\" autocomplete=\"on\" required></textarea>\n                <mat-error>Enter the description</mat-error>\n            </mat-form-field>\n            <mat-form-field>\n                <mat-label>Procedure Title</mat-label>\n                <input matInput formControlName=\"procedures_title\" autocomplete=\"on\" required>\n                <mat-error>Enter the procedures title</mat-error>\n            </mat-form-field>\n            <mat-form-field>\n                <mat-label>Procedures</mat-label>\n                <textarea matInput formControlName=\"procedures_description\" autocomplete=\"on\" required></textarea>\n                <mat-error>Enter the procedures</mat-error>\n            </mat-form-field>\n            <div class=\"buttonDiv\">\n                <button mat-raised-button color=\"primary\" class=\"fullButtonCSS\" [disabled]=\"admissionForm.invalid \">Update</button>\n                <div class=\"space\"></div>\n                <a mat-raised-button color=\"warn\" class=\"fullButtonCSS\" (click)=\"cancel()\">Cancel</a>\n            </div>\n        </form>\n    </mat-card>\n</div>\n\n<div *ngIf=\"onlineRegister\" class=\"centerDiv\">\n    <mat-card class=\"formCSS\">\n        <form [formGroup]=\"registerForm\" #formDirective=\"ngForm\" (ngSubmit)=\"onRegistrationForm(formDirective, 'add');\">\n            <div hidden>\n                <input matInput formControlName=\"id\">\n            </div>\n            <div>\n                <h3>Online Registration</h3>\n            </div>\n            <div class=\"formFieldCSS\">\n                <div class=\"horizontalRowCSS\">\n                    <div class=\"twoElementsCSS\">\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Student name</mat-label>\n                            <input [maxLength]=\"100\" matInput formControlName=\"student_name\" autocomplete=\"on\" required>\n                            <mat-error>Enter the student name</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"space\"></div>\n                    <div class=\"twoElementsCSS\">\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Father/Gaurdian Name</mat-label>\n                            <input [maxLength]=\"100\" matInput formControlName=\"father_name\" autocomplete=\"on\" required>\n                            <mat-error>Enter the Father/Gaurdian name</mat-error>\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n            <div class=\"formFieldCSS\">\n                <div class=\"horizontalRowCSS\">\n                    <div class=\"twoElementsCSS\">\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>DOB</mat-label>\n                            <input matInput type=\"date\" formControlName=\"dob\" required>\n                            <mat-error>Select the DOB</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"space\"></div>\n                    <div class=\"twoElementsCSS\">\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Mobile No</mat-label>\n                            <input [maxLength]=\"10\" type=\"number\" matInput formControlName=\"mobile_no\" (change)=\"mobileExist($event.target.value)\" required>\n                            <mat-error>Enter the mobile number</mat-error>\n                        </mat-form-field>\n\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"formFieldCSS\">\n                <div class=\"horizontalRowCSS\">\n                    <div class=\"twoElementsCSS\">\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Email</mat-label>\n                            <input type=\"email\" [maxLength]=\"100\" matInput formControlName=\"email_id\" (change)=\"emailExist($event.target.value)\" autocomplete=\"on\" required>\n                            <mat-error>Enter the correct emailID</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"space\"></div>\n                    <div class=\"twoElementsCSS\">\n                        <mat-form-field formGroupName=\"dept\">\n                            <mat-label>Department</mat-label>\n                            <mat-select formControlName=\"dept_id\">\n                                <mat-option *ngFor='let department of student_Departments' [value]=\"department.dept_id\">{{department.dept_name}}</mat-option>\n                            </mat-select>\n                            <mat-error>Select the department</mat-error>\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"container\">\n                <!-- <mat-form-field formGroupName=\"regStatus\">\n                    <mat-label>Status</mat-label>\n                    <mat-select formControlName=\"regStatusValue\">\n                        <mat-option *ngFor='let reg of student_Registeration_Status' [value]=\"reg.id\">{{reg.status}}</mat-option>\n                    </mat-select>\n                    <mat-error>Select the department</mat-error>\n                </mat-form-field> -->\n                <mat-radio-group formGroupName=\"regStatus\" fxLayout=\"column\">\n                    <mat-radio-button class=\"item\" *ngFor=\"let op of student_Registeration_Status\" [value]=\"op.id\" name=\"opList\">{{ op.status}}</mat-radio-button>\n                </mat-radio-group>\n            </div>\n\n            <div class=\"buttonDiv\">\n                <button mat-raised-button color=\"primary\" class=\"fullButtonCSS\" [disabled]=\"registerForm.invalid \">{{buttonText}}</button>\n                <div class=\"space\"></div>\n                <a mat-raised-button color=\"warn\" class=\"fullButtonCSS\" (click)=\"cancel()\">Cancel</a>\n            </div>\n        </form>\n    </mat-card>\n</div>\n<app-spinner></app-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n\r\n<body>\r\n    <router-outlet></router-outlet>\r\n</body>\r\n\r\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bus-route/bus-route.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bus-route/bus-route.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin-top: 1%;\">\n    <div *ngIf=\"showPanel\">\n\n        <div class=\"parentProfile\">\n            <div class=\"space\">\n                <marquee class=\"news\">\n                    <img src=\"../../assets/images/new.png\" width=\"5%\" height=\"5%\" alt=\"Italian Trulli\">{{news}}</marquee>\n            </div>\n            <div class=\"space\">\n                <button mat-raised-button color=\"success\" type=\"reset\" (click)=\"createProfile()\">Create</button>\n\n            </div>\n            <div class=\"endSpace\">\n                <button mat-raised-button color=\"primary\">Edit</button>\n            </div>\n        </div>\n        <div class=\"tableVehicle\">\n            <table class=\"tableDiv\" mat-table [dataSource]=\"route_DataSource\" style=\"table-layout: fixed;\">\n                <div>\n                    <ng-container matColumnDef=\"bus_no\">\n                        <th mat-header-cell *matHeaderCellDef>Bus No</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.bus_no}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"first_name\">\n                        <th mat-header-cell *matHeaderCellDef>Firstname</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.first_name}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"last_name\">\n                        <th mat-header-cell *matHeaderCellDef>Lastname</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.last_name}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"mobile_no\">\n                        <th mat-header-cell *matHeaderCellDef> Mobile No</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.mobile}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"route\">\n                        <th mat-header-cell *matHeaderCellDef> Route</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.route}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"lat\">\n                        <th mat-header-cell *matHeaderCellDef> Latitue</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.lat}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"lon\">\n                        <th mat-header-cell *matHeaderCellDef> Longitude</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.lon}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"map\">\n                        <th mat-header-cell *matHeaderCellDef> Map </th>\n                        <td mat-cell *matCellDef=\"let element\">\n\n                            <button mat-icon-button color=\"warn\" (click)=\"mapView(element.bus_no, element.lat, \n                                                                element.lon)\">\n              <mat-icon class=\"mat-18\">place</mat-icon>\n          </button>\n                        </td>\n                    </ng-container>\n\n                </div>\n\n                <tr mat-header-row *matHeaderRowDef=\"Columns; sticky: true\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: Columns;\"></tr>\n            </table>\n            <div class=\"pageDiv\">\n                <mat-form-field class=\"paginationForm\" style=\"padding-left: 2em;\">\n                    <mat-label class=\"filerInput\">Search</mat-label>\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\">\n                </mat-form-field>\n                <mat-paginator class=\"matPage\" [pageSizeOptions]=\"[5, 10, 25, 50, 100]\" [pageSize]=\"10\" showFirstLastButtons></mat-paginator>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"!showPanel\" class=\"iframe-embed-responsive-16by9\">\n\n        <div class=\"refreshbtn\">\n            <button mat-icon-button color=\"warn\" (click)=\"onNoClick()\">\n              <mat-icon class=\"mat-18\" style=\"font-size: 2.5em;\">cancel_outline</mat-icon>\n          </button>\n        </div>\n        <div class=\"closebtn\">\n            <button mat-icon-button color=\"primary\" (click)=\"mapRefresh()\">\n              <mat-icon class=\"mat-18\" style=\"font-size: 2.5em;\">refresh</mat-icon>\n          </button>\n        </div>\n        <iframe class=\"iframe-embed\" [src]='controllerSrc'></iframe>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/careers/careers.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/careers/careers.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"matParent\">\n    <table>\n        <tr>\n            <td>\n                <h2 class=\"centerCard\">Career with TSVS</h2>\n                <br>\n                <p class=\"justify\">\n                    Passionate about teaching, love children and derive energy out of addressing the unique learning needs of each child ? Then The Sanskaar Valley School will provide you an ideal environment to harness your creativity into tangible results. If you have\n                    experience in education sector and are looking for an institution where you can unfurl your talent, then kindly send in your resume to career@sanskaarvalley.org\n                </p>\n                <br>\n                <h3>Recruitment Department</h3>\n                <h4>English</h4>\n                <br>\n                <p class=\"justify\">\n                    &#9658; Having good experience in school teaching.\n                    <br>&#9658; Minimum 8 years of experience need.\n                </p>\n                <br>\n                <h4>Maths</h4>\n                <p class=\"justify\">\n                    &#9658; Having good experience in school teaching.\n                    <br>&#9658; Minimum 8 years of experience need.\n                </p>\n            </td>\n        </tr>\n    </table>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-accounts/create-accounts.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-accounts/create-accounts.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"centerDiv\">\n    <mat-card class=\"formCSS\">\n        <form [formGroup]=\"registerForm\" enctype='multipart/form-data' #formDirective=\"ngForm\" (ngSubmit)=\"onSubmit(formDirective);\">\n            <div hidden>\n                <input matInput formControlName=\"profile_id\">\n                <input matInput formControlName=\"id\">\n            </div>\n\n            <div class=\"profileImageDiv\">\n                <div class=\"image-upload\">\n                    <label for=\"file-input\">\n                        <img class=\"imgBorder\"  [src]=\"imgURL\" (error)=\"setDefaultPic($event)\">\n                        <!-- <img class=\"imgBorder\"  [src]=\"imgURL\" onerror=\"this.src='/assets/images/defaultProfile.png';\"> -->\n                        <!-- <input type=\"hidden\" name=\"fileHidden\" formControlName=\"profileImage\"/> -->\n                        <img class=\"uploading\" src=\"/assets/images/upload.png\"/>\n                    </label>\n                    <input id=\"file-input\" #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\" />\n                </div>\n            </div>\n\n            <div class=\"formFieldCSS\">\n                <div class=\"horizontalRowCSS\">\n                    <div class=\"twoElementsCSS\">\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Firstname</mat-label>\n                            <input [maxLength]=\"100\" matInput formControlName=\"first_name\" autocomplete=\"on\" required>\n                            <mat-error>Enter the firstname</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"space\"></div>\n                    <div class=\"twoElementsCSS\">\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Lastname</mat-label>\n                            <input [maxLength]=\"100\" matInput formControlName=\"last_name\" autocomplete=\"on\" required>\n                            <mat-error>Enter the lastname</mat-error>\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"show\" class=\"formFieldCSS\">\n                <div class=\"horizontalRowCSS\">\n                    <div class=\"twoElementsCSS\">\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Password</mat-label>\n                            <input [maxLength]=\"255\" matInput [type]=\"hidePassword ? 'text' : 'password'\" formControlName=\"password\" autocomplete=\"off\" (input)=\"onPasswordInput()\" required>\n                            <mat-icon matSuffix (click)=\"hidePassword = !hidePassword\">\n                                {{hidePassword1 ? 'visibility' : 'visibility_off'}}</mat-icon>\n                            <mat-error *ngIf=\"password.hasError('required')\">Password is required</mat-error>\n                            <mat-error *ngIf=\"password.hasError('minlength')\">Password must have at least {{minPw}} characters</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"space\"></div>\n                    <div class=\"twoElementsCSS\">\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Password</mat-label>\n                            <input [maxLength]=\"255\" matInput [type]=\"hidePasswordconfirm ? 'text' : 'password'\" formControlName=\"passwordConfirm\" autocomplete=\"off\" (input)=\"onPasswordInput()\" required>\n                            <mat-icon matSuffix (click)=\"hidePasswordconfirm = !hidePasswordconfirm\">\n                                {{hidePassword1 ? 'visibility' : 'visibility_off'}}</mat-icon>\n                            <mat-error *ngIf=\"passwordConfirm.hasError('required')\">Please confirm your password</mat-error>\n                            <mat-error *ngIf=\"passwordConfirm.invalid && !passwordConfirm.hasError('required')\">Passwords don't match</mat-error>\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n            <div class=\"formFieldCSS\">\n                <div class=\"horizontalRowCSS\">\n                    <div class=\"twoElementsCSS\">\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>DOB</mat-label>\n                            <input matInput type=\"date\" formControlName=\"dob\" required>\n                            <mat-error>Select the DOB</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"space\"></div>\n                    <div class=\"twoElementsCSS\">\n                        <mat-form-field appearance=\"outline\">\n                            <mat-label>Mobile No</mat-label>\n                            <input [maxLength]=\"10\" type=\"number\" matInput formControlName=\"mobile_no\" (change)=\"mobileExist($event.target.value)\" required>\n                            <mat-error>Enter the mobile number</mat-error>\n                        </mat-form-field>\n\n                    </div>\n                </div>\n            </div>\n\n            <div>\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Email</mat-label>\n                    <input type=\"email\" [maxLength]=\"100\" matInput formControlName=\"email_id\" (change)=\"emailExist($event.target.value)\" autocomplete=\"on\" required>\n                    <mat-error>Enter the correct emailID</mat-error>\n                </mat-form-field>\n            </div>\n\n            <div class=\"formFieldCSS\">\n                <div class=\"horizontalRowCSS\">\n                    <div class=\"twoElementsCSS\">\n                        <mat-form-field formGroupName=\"profile_catg\">\n                            <mat-label>Category</mat-label>\n                            <mat-select [disabled]=\"editable\" formControlName=\"profile_category_id\" (selectionChange)=\"department($event.value)\">\n                                <mat-option *ngFor='let profileData of profile_Category' [value]=\"profileData.profile_category_id\">{{profileData.profile_type}}</mat-option>\n                            </mat-select>\n                            <mat-error>Select the category</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"space\"></div>\n                    <div class=\"twoElementsCSS\">\n                        <mat-form-field formGroupName=\"dept\">\n                            <mat-label>Department</mat-label>\n                            <mat-select formControlName=\"dept_id\">\n                                <mat-option *ngFor='let department of department_Type' [value]=\"department.dept_id\">{{department.dept_name}}</mat-option>\n                            </mat-select>\n                            <mat-error>Select the department</mat-error>\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"buttonDiv\">\n                <button mat-raised-button color=\"primary\" class=\"fullButtonCSS\" [disabled]=\"registerForm.invalid \">{{buttonText}}</button>\n                <div class=\"space\"></div>\n                <a mat-raised-button color=\"warn\" class=\"fullButtonCSS\" (click)=\"cancel()\">Cancel</a>\n            </div>\n        </form>\n    </mat-card>\n</div>\n<app-spinner></app-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/delete/delete.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/delete/delete.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mainDiv\">\n    <div>\n        <img style=\"width: 20%; height: 20%; margin-left: 40%; margin-bottom: 2%; margin-top: -5%;\" src=\"/assets/images/delete.webp\">\n    </div>\n    <div class=\"dialogtext\">\n        <p>{{messsage}}</p>\n    </div>\n\n    <div class=\"buttonDiv\">\n        <div class=\"dialog-confirm\" [mat-dialog-close]=\"true\" (click)=\"deleteProfile();\">\n            <label class=\"labelText\">Confirm</label>\n        </div>\n\n        <div class=\"dialog-cancel\" [mat-dialog-close]=\"true\">\n            <label class=\"labelText\">Cancel</label>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogue/dialogue.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialogue/dialogue.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dialogueDiv\">\n    <div class=\"dialog-headline\">\n        <label style=\"margin-top: 3%; font-size: medium; font-style: normal;\"> Success</label>\n    </div>\n\n    <div class=\"centerMessage\">\n        Mr/Ms <b>{{name}}</b> profile has been created / updated successfully. His/Her profile ID is <b>{{profile_id}}</b>.\n    </div>\n\n    <div class=\"buttonDiv\">\n        <button mat-raised-button class=\"buttonDialogue\" (click)=\" closeDialogue() \">Ok</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"mainDiv\">\n    <div>\n        <img style=\"width: 20%; height: 20%; margin-left: 40%; margin-bottom: 2%; margin-top: -5%;\" src=\"/assets/images/delete.webp\">\n    </div>\n    <div class=\"dialogtext\">\n        <p>{{messsage}}</p>\n    </div>\n\n    <div class=\"buttonDiv\">\n        <div class=\"dialog-confirm\" [mat-dialog-close]=\"true\" (click)=\"deleteProfile();\">\n            <label class=\"labelText\">Confirm</label>\n        </div>\n\n        <div class=\"dialog-cancel\" [mat-dialog-close]=\"true\">\n            <label class=\"labelText\">Cancel</label>\n        </div>\n    </div>\n</div> -->\n\n<div>\n    <div class=\"titleText\">\n        <h3>{{name}}</h3>\n    </div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/glbspinner/glbspinner.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/glbspinner/glbspinner.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-root>\n    <ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"default\" type=\"ball-spin-clockwise\">\n        <p style=\"color: white\">Please Wait. </p>\n    </ngx-spinner>\n</app-root>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/holiday-list/holiday-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/holiday-list/holiday-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>holiday-list works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"title\">\r\n    <mat-toolbar-row>\r\n        <img class=\"logo\" src=\"../../assets/images/vei_logo.png\">\r\n        <div class=\"topMenu\">\r\n            <a mat-button [routerLink]=\"'/home/schoolHome'\" routerLinkActive=\"active-menu-item\"> Home </a>\r\n            <a mat-button [routerLink]=\"'/home/about'\" routerLinkActive=\"active-menu-item\"> About </a>\r\n            <a mat-button [routerLink]=\"'/home/programs'\" routerLinkActive=\"active-menu-item\"> Programs </a>\r\n            <a mat-button [routerLink]=\"'/home/studev'\" routerLinkActive=\"active-menu-item\"> Students Developments </a>\r\n            <a mat-button [routerLink]=\"'/home/admission'\" routerLinkActive=\"active-menu-item\"> Admission </a>\r\n            <a mat-button [routerLink]=\"'/home/careers'\" routerLinkActive=\"active-menu-item\"> Careers </a>\r\n            <a mat-button [routerLink]=\"'/home/reachus'\" routerLinkActive=\"active-menu-item\"> Reach Us </a>\r\n\r\n        </div>\r\n        <button mat-icon-button>\r\n      <mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon>\r\n    </button>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container [hasBackdrop]=\"true\">\r\n    <mat-sidenav class=\"sidenav\" #sidenav mode=\"over\" position=\"end\" closed role=\"navigation\" (click)=\"sidenav.toggle()\">\r\n        <mat-nav-list>\r\n\r\n            <!-- <a mat-list-item [routerLink]=\"'/home/profile'\" routerLinkActive=\"active-list-item\"> Profile </a> -->\r\n            <a mat-list-item (click)=\"routePath('/home/profile')\" routerLinkActive=\"active-list-item\"> Profile </a>\r\n            <a mat-list-item (click)=\"routePath('/home/timetable')\" routerLinkActive=\"active-list-item\"> Timetable </a>\r\n            <a mat-list-item (click)=\"routePath('/home/leave')\" routerLinkActive=\"active-list-item\"> Leave </a>\r\n            <a mat-list-item (click)=\"routePath('/home/busroutes')\" routerLinkActive=\"active-list-item\" routerLinkActive=\"active-list-item\"> Bus Routes </a>\r\n            <a mat-list-item (click)=\"routePath('/home/holidaylist')\" routerLinkActive=\"active-list-item\"> Holiday List </a>\r\n            <a mat-list-item (click)=\"routePath('/home/update')\" routerLinkActive=\"active-list-item\"> Data Updates</a>\r\n            <a mat-list-item (click)=\"routePath('/home/createaccount')\" routerLinkActive=\"active-list-item\"> Feedbacks </a>\r\n            <!-- <a mat-list-item (click)=\"routePath('/home/createaccount')\" routerLinkActive=\"active-list-item\"> Create User </a> -->\r\n            <a mat-list-item (click)=\"routePath('')\" mat-list-item>{{signText}}</a>\r\n            <a mat-list-item [routerLink]=\"\"></a>\r\n            <!-- <a mat-list-item (click)=\"sidenav.toggle()\" href=\"\" mat-list-item>Sign Out</a> -->\r\n\r\n\r\n        </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n        <div style=\"height: 88vh;\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/information-dialogue/information-dialogue.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/information-dialogue/information-dialogue.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>information-dialogue works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/leave/leave.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/leave/leave.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("test");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"centerDiv\">\n    <mat-card class=\"formCSS\">\n        <div class=\"centerContentDiv\">\n            <h3>{{loginTitle}}</h3>\n            {{content}}\n        </div>\n        <br>\n        <br>\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n                <!-- User Name -->\n                <mat-form-field appearance=\"outline\" class=\"formField\">\n                    <mat-label>User Name</mat-label>\n                    <input [maxLength]=\"100\" matInput formControlName=\"email_id\" autocomplete=\"on\" required>\n                    <mat-error class=\"my-mat-hint\">User Name Cannot be Empty</mat-error>\n                </mat-form-field>\n            </div>\n            <!-- Password -->\n            <div class=\"row\">\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Password</mat-label>\n                    <input [maxLength]=\"255\" matInput [type]=\"hidePassword1 ? 'text' : 'password'\" formControlName=\"password\" autocomplete=\"off\" required>\n                    <mat-icon matSuffix (click)=\"hidePassword1 = !hidePassword1\">\n                        {{hidePassword1 ? 'visibility' : 'visibility_off'}}</mat-icon>\n                    <mat-error class=\"my-mat-hint\">Please provide a valid password</mat-error>\n                </mat-form-field>\n            </div>\n\n            <div class=\"row\">\n                <mat-form-field formGroupName=\"profile_catg\">\n                    <mat-label>Category</mat-label>\n                    <mat-select formControlName=\"profile_category_id\">\n                        <mat-option *ngFor='let profileData of profile_Category' [value]=\"profileData.profile_category_id\">\n                            {{profileData.profile_type}}</mat-option>\n                    </mat-select>\n                    <mat-error>Select the category</mat-error>\n                </mat-form-field>\n            </div>\n\n            <button mat-raised-button class=\"buttonCSS\" [disabled]=\"loginForm.invalid \">Sign in</button>\n\n\n        </form>\n        <div class=\"bottomView\">\n            <a class=\"forgetCSS\" (click)=\"forgetPassword()\">Forgot Password</a>\n        </div>\n    </mat-card>\n</div>\n<app-spinner></app-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"showPanel\">\n\n    <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit(profileForm.value)\">\n        <div class=\"parentProfile\">\n            <div class=\"firstSpace\">\n                <mat-form-field formGroupName=\"profile_catg\">\n                    <mat-label>Staff / Student</mat-label>\n                    <mat-select formControlName=\"profile_category_id\" (selectionChange)=\"department($event.value)\">\n                        <mat-option *ngFor='let profileData of profile_Category' [value]=\"profileData.profile_category_id\">{{profileData.profile_type}}</mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div class=\"space\">\n                <mat-form-field formGroupName=\"dept\">\n                    <mat-label>Department / Class</mat-label>\n                    <mat-select formControlName=\"dept_id\">\n                        <mat-option *ngFor='let department of department_Type' [value]=\"department.dept_id\">{{department.dept_name}}</mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div class=\"space\">\n                <mat-form-field>\n                    <mat-label>Staff / Student ID</mat-label>\n                    <input matInput formControlName=\"profile_id\">\n                </mat-form-field>\n            </div>\n\n            <div class=\"space\">\n                <mat-form-field>\n                    <mat-label>Mobile</mat-label>\n                    <input matInput type=\"number\" formControlName=\"mobile_no\">\n                </mat-form-field>\n            </div>\n\n            <div class=\"space\">\n                <button mat-raised-button color=\"primary\">Submit</button>\n            </div>\n            <div *ngIf=\"showBtn\" class=\"endSpace\">\n                <button mat-raised-button color=\"success\" type=\"reset\" (click)=\"createProfile()\">Create</button>\n            </div>\n        </div>\n    </form>\n\n    <div class=\"tableMargin\">\n        <!-- <table class=\"tableDiv\" mat-table [dataSource]=\"mat_DataSource\" style=\"table-layout: fixed;\"></table> -->\n        <table class=\"tableDiv\" mat-table [dataSource]=\"mat_DataSource\" style=\"table-layout: fixed;\">\n            <div>\n                <ng-container matColumnDef=\"profileid\">\n                    <th mat-header-cell *matHeaderCellDef>ID</th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.profile_id}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"first_name\">\n                    <th mat-header-cell *matHeaderCellDef>Firstname</th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.first_name}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"last_name\">\n                    <th mat-header-cell *matHeaderCellDef>Lastname</th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.last_name}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"dob\">\n                    <th mat-header-cell *matHeaderCellDef> Date of Birth </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.dob | date: 'dd MMM yyyy'}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"mobile_no\">\n                    <th mat-header-cell *matHeaderCellDef> Mobile No</th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.mobile_no}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"email_id\">\n                    <th mat-header-cell *matHeaderCellDef> Email ID </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.email_id}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"profile_category_type\">\n                    <th mat-header-cell *matHeaderCellDef> Category </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.profile_catg.profile_type}} </td>\n                </ng-container>\n\n                <ng-container>\n                    <th mat-header-cell *matHeaderCellDef> Category </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.profile_catg.profile_category_id}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"dept_id\">\n                    <th mat-header-cell *matHeaderCellDef> Department </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.dept.dept_name}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"profile_url\">\n                    <th mat-header-cell *matHeaderCellDef> Profile URL </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.profile_url}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"profile_image\">\n                    <th mat-header-cell *matHeaderCellDef> Profile </th>\n                    <td mat-cell *matCellDef=\"let element\">\n                        <!-- <img class=\"imgBorder\" [src]=\"element.profile_url\" (error)=\"setDefaultPic($event)\"> -->\n                        <img class=\"imgBorder\" [src]=\"element.profile_url\" (error)=\"setDefaultPic($event)\">\n\n                    </td>\n                </ng-container>\n\n            </div>\n\n            <div>\n                <ng-container matColumnDef=\"details\" style=\"z-index: 1;\">\n                    <th mat-header-cell *matHeaderCellDef> Actions </th>\n                    <td mat-cell *matCellDef=\"let element\">\n\n                        <button mat-icon-button color=\"accent\" (click)=\"viewProfile(element)\">\n            <mat-icon class=\"mat-18\">remove_red_eye</mat-icon>\n        </button>\n                        <button mat-icon-button color=\"accent\" (click)=\"editProfile(element)\">\n            <mat-icon class=\"mat-18\">edit</mat-icon>\n        </button>\n                        <button mat-icon-button color=\"warn\" (click)=\"deleteProfile(element.profile_id, \n                                                                element.first_name,\n                                                                element.last_name,\n                                                                element.profile_catg.profile_category_id)\">\n              <mat-icon class=\"mat-18\">delete</mat-icon>\n          </button>\n                    </td>\n                </ng-container>\n\n            </div>\n            <tr mat-header-row *matHeaderRowDef=\"Columns; sticky: true\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: Columns;\"></tr>\n        </table>\n        <div class=\"pageDiv\">\n            <mat-form-field class=\"paginationForm\" style=\"padding-left: 2em;\">\n                <mat-label class=\"filerInput\">Search</mat-label>\n                <input matInput (keyup)=\"applyFilter($event.target.value)\">\n            </mat-form-field>\n            <mat-paginator class=\"matPage\" [pageSizeOptions]=\"[5, 10, 25, 50, 100]\" [pageSize]=\"10\" showFirstLastButtons></mat-paginator>\n        </div>\n\n    </div>\n</div>\n<div *ngIf=\"!showPanel\">\n    <div class=\"centerDiv\">\n        <mat-card class=\"profileContentDiv\">\n            <img class=\"profileImage\" [src]=\"studentProfile.profile_url\" (error)=\"setDefaultPic($event)\">\n            <!-- <img class=\"profileImage\" src=\"https://homepages.cae.wisc.edu/~ece533/images/zelda.png\" onerror=\"this.src='/assets/images/defaultProfile.png';\" /> -->\n            <div class=\"profileChildContentDiv\">\n                <h3>Hi {{studentProfile.first_name}}</h3>\n                <h4>{{studentProfile.profile_catg.profile_type}}</h4>\n                <hr class=\"line\">\n\n                <div class=\"textAlign\">\n                    <div class=\"divleftWidth\"><b>Profile ID</b></div>\n                    <div class=\"divRightWidth\"> {{studentProfile.profile_id}}</div>\n                </div>\n\n                <div class=\"textAlign\">\n                    <div class=\"divleftWidth\"><b>Father name</b></div>\n                    <div class=\"divRightWidth\"> {{studentProfile.last_name}}</div>\n                </div>\n\n                <div class=\"textAlign\">\n                    <div class=\"divleftWidth\"> <b>Dob</b> </div>\n                    <div class=\"divRightWidth\"> {{studentProfile.dob | date: 'dd MMM yyyy'}}</div>\n                </div>\n\n                <div class=\"textAlign\">\n                    <div class=\"divleftWidth\"><b>Mobile No</b></div>\n                    <div class=\"divRightWidth\"> {{studentProfile.mobile_no}}</div>\n                </div>\n\n                <div class=\"textAlign\">\n                    <div class=\"divleftWidth\"><b> Email ID </b></div>\n                    <div class=\"divRightWidth\"> {{studentProfile.email_id}}</div>\n                </div>\n\n                <div class=\"textAlign\">\n                    <div class=\"divleftWidth\"> <b>Department / Class </b></div>\n                    <div class=\"divRightWidth\"> {{studentProfile.dept.dept_name}}</div>\n                </div>\n                <div *ngIf=\"profileBtn\">\n                    <button class=\"bottomAlign\" mat-raised-button color=\"primary\" (click)=\"closeProfileView()\">Close</button>\n                </div>\n            </div>\n\n        </mat-card>\n    </div>\n    <app-spinner></app-spinner>\n</div>\n<app-spinner></app-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/programs/programs.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/programs/programs.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parent\">\n    <div *ngIf=\"showedit\" class=\"editBtnDiv\">\n        <button mat-fab color=\"accent\" (click)=\"editProgram('', 'add')\">\n            <mat-icon class=\"mat-18\">add</mat-icon>\n        </button>\n    </div>\n    <div *ngIf=\"gridDiv\">\n        <div class=\"matParent\">\n            <mat-grid-list cols=\"3\" rowHeight=\"1:1\" [gutterSize]=\"'1em'\">\n                <mat-grid-tile *ngFor=\"let programs of programData\">\n                    <mat-card class=\"matCard\" (click)=\"programsDetail(programs)\">\n                        <mat-card-content>\n                            <img class=\"schoolImage\" [src]=\"programs.programs_image_url\" (error)=\"setDefaultPic($event)\">\n                            <div class=\"gridEditBtnDiv\">\n                                <div *ngIf=\"showedit\">\n                                    <button mat-fab color=\"accent\" style=\"width: 2em; height: 2em;\" (click)=\"deletePrograms(programs)\">\n            <mat-icon class=\"icon24\">delete</mat-icon>\n        </button>\n                                    <div class=\"space\"></div>\n                                    <button mat-fab color=\"accent\" style=\"width: 2em; height: 2em;\" (click)=\"editProgram(programs, 'edit')\">\n            <mat-icon class=\"icon24\">edit</mat-icon>\n        </button>\n                                    <div class=\"space\"></div>\n                                </div>\n                                <button mat-fab color=\"accent\" style=\"width: 2em; height: 2em;\" (click)=\"programsDetail(programs)\">\n            <mat-icon class=\"icon24\">remove_red_eye</mat-icon>\n        </button>\n                            </div>\n                        </mat-card-content>\n\n                    </mat-card>\n                </mat-grid-tile>\n            </mat-grid-list>\n        </div>\n    </div>\n\n    <div *ngIf=\"edit\" class=\"centerDiv\">\n        <mat-card class=\"formCSS\">\n            <form [formGroup]=\"programsForm\" enctype='multipart/form-data' #formDirective=\"ngForm\" (ngSubmit)=\"onSubmit(formDirective);\">\n                <div hidden>\n                    <input matInput formControlName=\"id\">\n                </div>\n\n                <div class=\"profileImageDiv\">\n                    <div class=\"image-upload\">\n                        <label for=\"file-input\">\n                        <img class=\"imgBorder\"  [src]=\"imgURL\" (error)=\"setDefaultPic($event)\">\n                        <img class=\"uploading\" src=\"/assets/images/upload.png\"/>\n                    </label>\n                        <input id=\"file-input\" #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\" />\n                    </div>\n                </div>\n\n                <mat-form-field>\n                    <mat-label>Title</mat-label>\n                    <input matInput formControlName=\"title\" autocomplete=\"on\" required>\n                    <mat-error>Enter the title</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <mat-label>Description</mat-label>\n                    <textarea matInput formControlName=\"description\" autocomplete=\"on\" required></textarea>\n                    <mat-error>Enter the description</mat-error>\n                </mat-form-field>\n\n                <div class=\"buttonDiv\">\n                    <button mat-raised-button color=\"primary\" class=\"fullButtonCSS\" [disabled]=\"programsForm.invalid \">{{buttonValue}}</button>\n                    <div class=\"space\"></div>\n                    <a mat-raised-button color=\"warn\" class=\"fullButtonCSS\" (click)=\"cancel()\">Cancel</a>\n                </div>\n            </form>\n        </mat-card>\n    </div>\n\n    <div *ngIf=\"imageDetails\">\n        <div class=\"descParentDiv\">\n            <table class=\"descpDiv\">\n                <mat-toolbar-row>\n                    <div class=\"schoolFunctionImageDiv\">\n                        <img src=\"../../assets/images/close.png\" (click)=\"close()\" width=\"25em\" height=\"25em\">\n                    </div>\n                </mat-toolbar-row>\n                <tr>\n                    <h2 class=\"centerTitle\">{{programTitle}}</h2>\n                </tr>\n                <br>\n                <tr>\n                    <p class=\"justify\">{{programDescription}}</p>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reachus/reachus.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reachus/reachus.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contactParent\">\n    <h1 class=\"bold\">Sanskaar Valley School MAT. HR. SEC. SCHOOL</h1>\n    <span>(Recognized by the Government of Tamilnadu, India. ISO 9001:2015 Certified School)</span>\n    <br>\n    <br>\n    <p><strong>\n        No:1,South Avenue, Kamaraj Nagar, Thiruvanmiyur, Chennai – 600 041.\n    </strong></p>\n\n    <p><strong>Email tvr_sanv@yahoo.com , school@ssvtr.in </strong></p>\n\n    <p><strong>Tel. Number +91-44-2448 8672, +91-44-4230 0572</strong></p>\n\n    <p><strong> Website www.srisankaraschools.org</strong></p>\n    <br>\n    <br>\n\n    <iframe src=\"https://www.google.com/maps?q=Sanskaar Valley School Kerwa Dam, Near, Chandanpura, Bhopal, Madhya Pradesh 462016&output=embed\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen=\"\"></iframe>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/school-home/school-home.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/school-home/school-home.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parent\">\n    <div *ngIf=\"!edit\">\n        <div class=\"imageDiv\">\n            <img src=\"../../assets/images/schoolfrontview.jpg\" width=\"100%\" height=\"100%\" alt=\"Italian Trulli\">\n            <table class=\"boxContent\">\n                <mat-toolbar-row>\n                    <marquee class=\"news\">\n                        <img src=\"../../assets/images/new.png\" width=\"5%\" height=\"5%\" alt=\"Italian Trulli\">{{news}}</marquee>\n                </mat-toolbar-row>\n                <tr>\n                    <h2 class=\"centerTitle\">{{title}}</h2>\n                </tr>\n                <br>\n                <tr>\n                    <p class=\"justify\">{{description}}</p>\n                </tr>\n            </table>\n        </div>\n        <div *ngIf=\"showedit\">\n            <button style=\"position: absolute; right: 0; margin-right: 3em; margin-top: 2em;\" mat-fab color=\"accent\" (click)=\"editHome()\">\n            <mat-icon class=\"mat-18\">edit</mat-icon>\n        </button>\n        </div>\n    </div>\n    <div *ngIf=\"edit\" class=\"centerDiv\">\n        <mat-card class=\"formCSS\">\n            <form [formGroup]=\"homeForm\" enctype='multipart/form-data' #formDirective=\"ngForm\" (ngSubmit)=\"onSubmit(formDirective);\">\n                <div hidden>\n                    <input matInput formControlName=\"id\">\n                </div>\n\n                <div class=\"profileImageDiv\">\n                    <div class=\"image-upload\">\n                        <label for=\"file-input\">\n                        <img class=\"imgBorder\"  [src]=\"imgURL\" (error)=\"setDefaultPic($event)\">\n                        <img class=\"uploading\" src=\"/assets/images/upload.png\"/>\n                    </label>\n                        <input id=\"file-input\" #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\" />\n                    </div>\n                </div>\n\n                <mat-form-field>\n                    <mat-label>Title</mat-label>\n                    <input matInput formControlName=\"title\" autocomplete=\"on\" required>\n                    <mat-error>Enter the title</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <mat-label>Description</mat-label>\n                    <textarea matInput formControlName=\"description\" autocomplete=\"on\" required></textarea>\n                    <mat-error>Enter the description</mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <mat-label>News</mat-label>\n                    <input matInput formControlName=\"news\" autocomplete=\"on\" required>\n                </mat-form-field>\n\n                <div class=\"buttonDiv\">\n                    <button mat-raised-button color=\"primary\" class=\"fullButtonCSS\" [disabled]=\"homeForm.invalid \">Update</button>\n                    <div class=\"space\"></div>\n                    <a mat-raised-button color=\"warn\" class=\"fullButtonCSS\" (click)=\"cancel()\">Cancel</a>\n                </div>\n            </form>\n        </mat-card>\n    </div>\n</div>\n<app-spinner></app-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgba(0, 0, 0, 0.8)\" size=\"5%\" color=\"#fff\" type=\"square-jelly-box\" [fullScreen]=\"true\">\n    <p style=\"color: white\"> Please wait... </p>\n</ngx-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student-developments/student-developments.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student-developments/student-developments.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parent\">\n    <div *ngIf=\"showedit\" class=\"editBtnDiv\">\n        <button mat-fab color=\"accent\" (click)=\"editStudentDevelopments('', 'add')\">\n            <mat-icon class=\"mat-18\">add</mat-icon>\n        </button>\n    </div>\n    <div *ngIf=\"gridDiv\">\n        <div class=\"matParent\">\n            <mat-grid-list cols=\"3\" rowHeight=\"1:1\" [gutterSize]=\"'1em'\">\n                <mat-grid-tile *ngFor=\"let programs of programData\">\n                    <mat-card class=\"matCard\">\n                        <mat-card-content>\n                            <img class=\"schoolImage\" [src]=\"programs.student_development_image_url\" (error)=\"setDefaultPic($event)\">\n                            <div class=\"gridEditBtnDiv\">\n                                <div *ngIf=\"showedit\">\n                                    <button mat-fab color=\"accent\" style=\"width: 2em; height: 2em;\" (click)=\"deleteStudentDevelopments(programs)\">\n            <mat-icon class=\"icon24\">delete</mat-icon>\n        </button>\n                                    <div class=\"space\"></div>\n                                    <button mat-fab color=\"accent\" style=\"width: 2em; height: 2em;\" (click)=\"editStudentDevelopments(programs, 'edit')\">\n            <mat-icon class=\"icon24\">edit</mat-icon>\n        </button>\n                                    <div class=\"space\"></div>\n                                </div>\n                                <button mat-fab color=\"accent\" style=\"width: 2em; height: 2em;\" (click)=\"studentDevelopmentsDetail(programs)\">\n            <mat-icon class=\"icon24\">remove_red_eye</mat-icon>\n        </button>\n                            </div>\n                        </mat-card-content>\n\n                    </mat-card>\n                </mat-grid-tile>\n            </mat-grid-list>\n        </div>\n    </div>\n\n    <div *ngIf=\"edit\" class=\"centerDiv\">\n        <mat-card class=\"formCSS\">\n            <form [formGroup]=\"programsForm\" enctype='multipart/form-data' #formDirective=\"ngForm\" (ngSubmit)=\"onSubmit(formDirective);\">\n                <div hidden>\n                    <input matInput formControlName=\"id\">\n                </div>\n\n                <div class=\"profileImageDiv\">\n                    <div class=\"image-upload\">\n                        <label for=\"file-input\">\n                        <img class=\"imgBorder\"  [src]=\"imgURL\" (error)=\"setDefaultPic($event)\">\n                        <img class=\"uploading\" src=\"/assets/images/upload.png\"/>\n                    </label>\n                        <input id=\"file-input\" #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\" />\n                    </div>\n                </div>\n\n                <mat-form-field>\n                    <mat-label>Title</mat-label>\n                    <input matInput formControlName=\"title\" autocomplete=\"on\" required>\n                    <mat-error>Enter the title</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <mat-label>Description</mat-label>\n                    <textarea matInput formControlName=\"description\" autocomplete=\"on\" required></textarea>\n                    <mat-error>Enter the description</mat-error>\n                </mat-form-field>\n\n                <div class=\"buttonDiv\">\n                    <button mat-raised-button color=\"primary\" class=\"fullButtonCSS\" [disabled]=\"programsForm.invalid \">{{buttonValue}}</button>\n                    <div class=\"space\"></div>\n                    <a mat-raised-button color=\"warn\" class=\"fullButtonCSS\" (click)=\"cancel()\">Cancel</a>\n                </div>\n            </form>\n        </mat-card>\n    </div>\n\n    <div *ngIf=\"imageDetails\">\n        <div class=\"descParentDiv\">\n            <table class=\"descpDiv\">\n                <mat-toolbar-row>\n                    <div class=\"schoolFunctionImageDiv\">\n                        <img src=\"../../assets/images/close.png\" (click)=\"close()\" width=\"25em\" height=\"25em\">\n                    </div>\n                </mat-toolbar-row>\n                <tr>\n                    <h2 class=\"centerTitle\">{{programTitle}}</h2>\n                </tr>\n                <br>\n                <tr>\n                    <p class=\"justify\">{{programDescription}}</p>\n                </tr>\n            </table>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/timetable.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/timetable.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>timetable works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update/update.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update/update.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parentCSS\">\n    <mat-card class=\"childCSS\">\n        <img src=\"/assets/images/search_icon.png\" alt=\"Add new students / staffs profiles\">\n        <div>Add Profile</div>\n    </mat-card>\n    <mat-card class=\"childCSS\">\n        <img src=\"/assets/images/search_icon.png\" alt=\"Add new students / staffs profiles\">\n        <div class=\"innerChildCSS\">Create Timetable</div>\n    </mat-card>\n    <mat-card class=\"childCSS\">\n        <img src=\"/assets/images/search_icon.png\" alt=\"Add new students / staffs profiles\">\n        <div>Applied Leaves</div>\n    </mat-card>\n</div>\n\n<div class=\"parentCSS\">\n    <mat-card class=\"childCSS\">\n        <img src=\"/assets/images/search_icon.png\" alt=\"Add new students / staffs profiles\">\n        <div>Add Bus Routes</div>\n    </mat-card>\n    <mat-card class=\"childCSS\">\n        <img src=\"/assets/images/search_icon.png\" alt=\"Add new students / staffs profiles\">\n        <div class=\"innerChildCSS\">Add Yearly Holidays</div>\n    </mat-card>\n    <mat-card class=\"childCSS\">\n        <img src=\"/assets/images/search_icon.png\" alt=\"Add new students / staffs profiles\">\n        <div>View Feedbacks</div>\n    </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\r\n    color: #000;\r\n}\r\n\r\n​:host ::ng-deep .mat-focused .mat-form-field-underline .mat-form-field-ripple {\r\n    background: #000;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\r\n    color: #000;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n:host ::ng-deep.mat-form-field-underline {\r\n    background-color: #000 !important;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field-label {\r\n    color: #000;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field-ripple {\r\n    background-color: #1976d2 !important;\r\n}\r\n\r\nmat-label {\r\n    color: #000;\r\n}\r\n\r\nspan {\r\n    color: red;\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n    border-left: none !important;\r\n}\r\n\r\n.ng-valid[required],\r\n.ng-valid.required {\r\n    border-left: none !important;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.red {\r\n    background: #B22222;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.warning {\r\n    background: #DAA520;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.green {\r\n    background: #228B22;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n.formCSS {\r\n    padding-left: 3%;\r\n    padding-right: 3%;\r\n    width: 50%;\r\n}\r\n\r\n.fullButtonCSS {\r\n    margin-top: 2%;\r\n    width: 100%;\r\n}\r\n\r\n.buttonDiv {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.space {\r\n    margin: 1%;\r\n}\r\n\r\n.imgBorder {\r\n    border-radius: 50%;\r\n    height: 10em;\r\n    width: 10em;\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    border: 0.1px #5867bb solid;\r\n    cursor: pointer;\r\n}\r\n\r\n.image-upload>input {\r\n    display: none;\r\n}\r\n\r\n.uploading {\r\n    height: 3em;\r\n    width: 3em;\r\n    position: absolute;\r\n    top: 6.5em;\r\n    left: 3.5em;\r\n    cursor: pointer;\r\n}\r\n\r\n.profileImageDiv {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    margin-left: 38%;\r\n}\r\n\r\n.homeParentDiv {\r\n    position: absolute;\r\n}\r\n\r\neditHome {\r\n    float: right;\r\n    margin-left: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBOztJQUVJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbuKAizpob3N0IDo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtbGFiZWwge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZy12YWxpZFtyZXF1aXJlZF0sXHJcbi5uZy12YWxpZC5yZXF1aXJlZCB7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyLnJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQjIyMjIyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDgwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNuYWNrLWJhci1jb250YWluZXIud2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjREFBNTIwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDgwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNuYWNrLWJhci1jb250YWluZXIuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzIyOEIyMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMTdweCA4MHB4O1xyXG59XHJcblxyXG4uZm9ybUNTUyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMyU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uZnVsbEJ1dHRvbkNTUyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uRGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zcGFjZSB7XHJcbiAgICBtYXJnaW46IDElO1xyXG59XHJcblxyXG4uaW1nQm9yZGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMTBlbTtcclxuICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvcmRlcjogMC4xcHggIzU4NjdiYiBzb2xpZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmltYWdlLXVwbG9hZD5pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udXBsb2FkaW5nIHtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgd2lkdGg6IDNlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNi41ZW07XHJcbiAgICBsZWZ0OiAzLjVlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGVJbWFnZURpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM4JTtcclxufVxyXG5cclxuLmhvbWVQYXJlbnREaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5lZGl0SG9tZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _globalconstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../globalconstants */ "./src/app/globalconstants.ts");
/* harmony import */ var _service_profileService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/profileService */ "./src/app/service/profileService.ts");
/* harmony import */ var _service_snackbar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/snackbar.service */ "./src/app/service/snackbar.service.ts");
/* harmony import */ var _service_tabServices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/tabServices */ "./src/app/service/tabServices.ts");











let AboutComponent = class AboutComponent {
    constructor(snackBar, spinner, profileService, tabSerives, router, formBuilder) {
        this.snackBar = snackBar;
        this.spinner = spinner;
        this.profileService = profileService;
        this.tabSerives = tabSerives;
        this.router = router;
        this.formBuilder = formBuilder;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.edit = false;
        this.showedit = false;
    }
    ngOnInit() {
        if (localStorage.getItem('profileCategory') === '1') {
            this.showedit = true;
        }
        this.formValidation();
        this.getSchoolAbout();
    }
    editHome() {
        this.getSchoolAbout();
        this.edit = true;
    }
    cancel() {
        this.edit = false;
    }
    formValidation() {
        this.aboutForm = this.formBuilder.group({
            id: [''],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            news: ['', '']
        });
    }
    ;
    setDefaultPic(event) {
        event.target.src = _globalconstants__WEBPACK_IMPORTED_MODULE_7__["Globalconstants"].defaultFilePath;
    }
    preview(files) {
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.snackBar.openSnackBarWarn(_globalconstants__WEBPACK_IMPORTED_MODULE_7__["Globalconstants"].fileType, '');
            return;
        }
        if (files[0].size > _globalconstants__WEBPACK_IMPORTED_MODULE_7__["Globalconstants"].imagesize) {
            this.snackBar.openSnackBarWarn(_globalconstants__WEBPACK_IMPORTED_MODULE_7__["Globalconstants"].errorFileSize, '');
            return false;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
            //this.registerForm.get('profileImage').setValue(files);
            this.selectedFiles = files;
        };
    }
    getSchoolAbout() {
        this.tabSerives.getAboutProfile().subscribe((data) => {
            console.log("data   " + data);
            console.log("data   " + data.title);
            this.title = data.title;
            this.description = data.description;
            this.news = data.news;
            this.imgURL = data.home_image_url;
            this.aboutForm.patchValue(data);
            this.spinner.hide();
        });
    }
    onSubmit(formDirective) {
        this.spinner.show();
        this.tabSerives.updateAboutProfile(this.aboutForm.value).subscribe((data) => {
            if (data.id != null) {
                this.spinner.hide();
                formDirective.resetForm();
                this.aboutForm.reset();
                this.edit = false;
                this.getSchoolAbout();
                // this.upload("SchoolProfile" + data.id);
                this.upload(_globalconstants__WEBPACK_IMPORTED_MODULE_7__["Globalconstants"].schoolAboutFolder);
                this.router.navigateByUrl('/home/about');
            }
            else {
                this.snackBar.openSnackBarError("Failure in updating data", "");
                this.spinner.hide();
            }
        }),
            error => {
                console.log(error);
                this.snackBar.openSnackBarError("Unable to process the webservice", "");
                this.spinner.hide();
            },
            () => { };
    }
    upload(id) {
        // if ((this.selectedFiles.item(0).size / 1024 / 1024 < 10) && (this.selectedFiles.item(0).type == 'application/vnd.ms-excel' || this.selectedFiles.item(0).type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || this.selectedFiles.item(0).type == 'application/octet-stream' || this.selectedFiles.item(0).type == 'application/vnd.oasis.opendocument.spreadsheet' || this.selectedFiles.item(0).type == "")) {
        if ((this.selectedFiles.item(0).size / 1024 / 1024 < 10)) {
            this.spinner.show();
            // this.progress.percentage = 0;
            this.currentFileUpload = this.selectedFiles.item(0);
            this.subscription.add(this.profileService.pushFileToStorage(this.currentFileUpload, id, _globalconstants__WEBPACK_IMPORTED_MODULE_7__["Globalconstants"].schoolAboutFolder)
                .subscribe(event => {
                this.spinner.hide();
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                    // this.progress.percentage = Math.round(100 * event.loaded / event.total);
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                    this.imgURL = _globalconstants__WEBPACK_IMPORTED_MODULE_7__["Globalconstants"].defaultFilePath;
                }
                // this.selectedFiles = undefined;
            }, error => {
                this.spinner.hide();
                this.snackBar.openSnackBarError(_globalconstants__WEBPACK_IMPORTED_MODULE_7__["Globalconstants"].errorMessage, "");
            }));
        }
        else {
            this.snackBar.openSnackBarWarn(_globalconstants__WEBPACK_IMPORTED_MODULE_7__["Globalconstants"].errorMessage, '');
        }
    }
};
AboutComponent.ctorParameters = () => [
    { type: _service_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["SnackbarService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
    { type: _service_profileService__WEBPACK_IMPORTED_MODULE_8__["ProfileService"] },
    { type: _service_tabServices__WEBPACK_IMPORTED_MODULE_10__["TabServices"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/admission/admission.component.css":
/*!***************************************************!*\
  !*** ./src/app/admission/admission.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\r\n    color: #000;\r\n}\r\n\r\n​:host ::ng-deep .mat-focused .mat-form-field-underline .mat-form-field-ripple {\r\n    background: #000;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\r\n    color: #000;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n:host ::ng-deep.mat-form-field-underline {\r\n    background-color: #000 !important;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field-label {\r\n    color: #000;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field-ripple {\r\n    background-color: #1976d2 !important;\r\n}\r\n\r\nmat-label {\r\n    color: #000;\r\n}\r\n\r\nspan {\r\n    color: red;\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n    border-left: none !important;\r\n}\r\n\r\n.ng-valid[required],\r\n.ng-valid.required {\r\n    border-left: none !important;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.red {\r\n    background: #B22222;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.warning {\r\n    background: #DAA520;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.green {\r\n    background: #228B22;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n.formCSS {\r\n    padding-left: 3%;\r\n    padding-right: 3%;\r\n    width: 50%;\r\n}\r\n\r\n.fullButtonCSS {\r\n    margin-top: 2%;\r\n    width: 100%;\r\n}\r\n\r\n.buttonDiv {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.space {\r\n    margin: 1%;\r\n}\r\n\r\n.admissionDiv {\r\n    text-align: left;\r\n    width: 100%;\r\n    padding-left: 1%;\r\n    margin-top: 1%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.editBtnDiv {\r\n    position: absolute;\r\n    right: 0;\r\n    margin-right: 2em;\r\n    margin-top: 1em;\r\n    z-index: 1;\r\n}\r\n\r\n.item {\r\n    width: 50%\r\n}\r\n\r\n.container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.container>div {\r\n    -webkit-box-flex: 0;\r\n            flex: 0 50%;\r\n    /*demo*/\r\n    border: red solid;\r\n    box-sizing: border-box\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaXNzaW9uL2FkbWlzc2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFXO1lBQVgsV0FBVztJQUNYLE9BQU87SUFDUCxpQkFBaUI7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FkbWlzc2lvbi9hZG1pc3Npb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG7igIs6aG9zdCA6Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDIgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LWxhYmVsIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5uZy1pbnZhbGlkOm5vdChmb3JtKSB7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmctdmFsaWRbcmVxdWlyZWRdLFxyXG4ubmctdmFsaWQucmVxdWlyZWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lci5yZWQge1xyXG4gICAgYmFja2dyb3VuZDogI0IyMjIyMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMTdweCA4MHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyLndhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZDogI0RBQTUyMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMTdweCA4MHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyLmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjhCMjI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDE3cHggODBweDtcclxufVxyXG5cclxuLmZvcm1DU1Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmZ1bGxCdXR0b25DU1Mge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ1dHRvbkRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc3BhY2Uge1xyXG4gICAgbWFyZ2luOiAxJTtcclxufVxyXG5cclxuLmFkbWlzc2lvbkRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZWRpdEJ0bkRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgd2lkdGg6IDUwJVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jb250YWluZXI+ZGl2IHtcclxuICAgIGZsZXg6IDAgNTAlO1xyXG4gICAgLypkZW1vKi9cclxuICAgIGJvcmRlcjogcmVkIHNvbGlkO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/admission/admission.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admission/admission.component.ts ***!
  \**************************************************/
/*! exports provided: AdmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionComponent", function() { return AdmissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../delete/delete.component */ "./src/app/delete/delete.component.ts");
/* harmony import */ var _dialogue_dialogue_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialogue/dialogue.component */ "./src/app/dialogue/dialogue.component.ts");
/* harmony import */ var _globalconstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../globalconstants */ "./src/app/globalconstants.ts");
/* harmony import */ var _service_snackbar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/snackbar.service */ "./src/app/service/snackbar.service.ts");
/* harmony import */ var _service_tabServices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/tabServices */ "./src/app/service/tabServices.ts");











let AdmissionComponent = class AdmissionComponent {
    constructor(snackBar, spinner, tabSerives, dialog, router, formBuilder) {
        this.snackBar = snackBar;
        this.spinner = spinner;
        this.tabSerives = tabSerives;
        this.dialog = dialog;
        this.router = router;
        this.formBuilder = formBuilder;
        this.admissionContent = false;
        this.viewRegister = false;
        this.editHeader = false;
        this.descriptionHeader = false;
        this.form = false;
        this.onlineRegister = false;
        this.mat_DataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        const onlineStudentProfile = [];
        this.mat_DataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](onlineStudentProfile);
    }
    ngOnInit() {
        this.formValidation();
        this.registerformValidation();
        this.adminValid();
        this.getSchoolAdmissionHeader();
        this.studentDepartments();
        this.studentRegistrationStatus();
    }
    studentDepartments() {
        this.tabSerives.getStudentDepartments().subscribe((data) => {
            this.student_Departments = data;
        });
    }
    studentRegistrationStatus() {
        this.tabSerives.getStudentRegistrationStatus().subscribe((data) => {
            this.student_Registeration_Status = data;
        });
    }
    adminValid() {
        if (localStorage.getItem('profileCategory') === '1') {
            this.editHeader = true;
            this.viewRegister = true;
        }
        this.admissionContent = true;
        this.descriptionHeader = false;
        this.onlineRegister = false;
    }
    emailExist(email) {
        const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (validEmailRegEx.test(email)) {
            this.tabSerives.emailExist(email).subscribe((data) => {
                console.log(data);
                if (data === true) {
                    this.snackBar.openSnackBarWarn("Email ID already exist", "");
                }
            });
        }
    }
    mobileExist(mobile) {
        this.tabSerives.mobileExist(mobile).subscribe((data) => {
            console.log(data);
            if (data === true) {
                this.snackBar.openSnackBarWarn("Mobile number already exist", "");
            }
        });
    }
    editAdmissionHeader() {
        this.onlineRegister = false;
        this.admissionContent = false;
        this.descriptionHeader = true;
    }
    deletePrograms(programs) {
        const dialogRef = this.dialog.open(_delete_delete_component__WEBPACK_IMPORTED_MODULE_6__["DeleteComponent"], {
            width: _globalconstants__WEBPACK_IMPORTED_MODULE_8__["Globalconstants"].width_delete,
            height: _globalconstants__WEBPACK_IMPORTED_MODULE_8__["Globalconstants"].height_delete,
            data: {
                programs_id: programs.id,
                component: _globalconstants__WEBPACK_IMPORTED_MODULE_8__["Globalconstants"].delete_programs
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            //console.log(result);
            // this.router.navigateByUrl('/home/admission');
            // this.getSchoolAdmissionHeader();
            this.pageRefresh();
        });
    }
    cancel() {
        this.adminValid();
        // this.pageRefresh();
    }
    pageRefresh() {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigateByUrl('/home/admission');
    }
    formValidation() {
        this.admissionForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            procedures_title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            procedures_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onlineRegisteration(adminssion, page) {
        this.onlineRegister = true;
        this.admissionContent = false;
        this.descriptionHeader = false;
        if (page === 'edit') {
            this.admissionForm.patchValue(adminssion);
            this.buttonText = 'Update';
        }
        else {
            this.admissionForm.reset();
            this.buttonText = 'Add';
        }
    }
    onRegistrationForm(formDirective, page) {
        this.spinner.show();
        this.tabSerives.onlineRegistration(this.registerForm.value).subscribe((data) => {
            console.log(data);
            if (data.profile_id != null) {
                this.spinner.hide();
                formDirective.resetForm();
                this.registerForm.reset();
                if (page == 'add') {
                    this.dialogue(data.profile_id, data.student_name, data.father_name);
                }
                else if (page == 'edit') {
                    localStorage.setItem('page', _globalconstants__WEBPACK_IMPORTED_MODULE_8__["Globalconstants"].edit_profile);
                    this.router.navigateByUrl('/home/profile');
                }
            }
            else {
                this.snackBar.openSnackBarError("Profile is already registered, Please check your mobile number and email ID", "");
                this.spinner.hide();
            }
        }),
            error => {
                console.log(error);
                this.snackBar.openSnackBarError("Unable to process the webservice", "");
                this.spinner.hide();
            },
            () => { };
    }
    getStudentOnlineRegistrations() {
        this.tabSerives.getOnlineStudentRegistration().subscribe((data) => {
            this.mat_DataSource.data = data;
            console.log(data);
        });
    }
    dialogue(profile_id, first_name, last_name) {
        this.dialog.open(_dialogue_dialogue_component__WEBPACK_IMPORTED_MODULE_7__["DialogueComponent"], {
            width: _globalconstants__WEBPACK_IMPORTED_MODULE_8__["Globalconstants"].width_reponse,
            height: _globalconstants__WEBPACK_IMPORTED_MODULE_8__["Globalconstants"].height_reponse,
            data: {
                profile_id: profile_id, first_name: first_name, last_name: last_name
            }
        }),
            this.dialog.afterAllClosed.subscribe(result => {
            });
    }
    registerformValidation() {
        this.registerForm = this.formBuilder.group({
            id: [''],
            student_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            father_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobile_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[6-9]\\d{9}')],
            email_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")],
            dept: this.formBuilder.group({
                dept_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            }),
            regStatus: ['', ''],
        });
    }
    getSchoolAdmissionHeader() {
        this.tabSerives.getSchoolAdmissionHeader().subscribe((data) => {
            this.title = data.title;
            this.description = data.description;
            this.procedures_title = data.procedures_title;
            this.procedures_description = data.procedures_description;
            this.admissionForm.patchValue(data);
            this.spinner.hide();
        });
    }
    close() {
        this.adminValid();
    }
    onSubmit(formDirective) {
        this.spinner.show();
        this.tabSerives.updateSchoolAdmissionHeader(this.admissionForm.value).subscribe((data) => {
            if (data.id != null) {
                this.spinner.hide();
                formDirective.resetForm();
                this.admissionForm.reset();
                this.adminValid();
                // this.getSchoolAdmissionHeader();
                this.pageRefresh();
                // this.router.navigateByUrl('/home/admission');
            }
            else {
                this.snackBar.openSnackBarError("Failure in updating data", "");
                this.spinner.hide();
            }
        }),
            error => {
                console.log(error);
                this.snackBar.openSnackBarError("Unable to process the webservice", "");
                this.spinner.hide();
            },
            () => { };
    }
};
AdmissionComponent.ctorParameters = () => [
    { type: _service_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["SnackbarService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
    { type: _service_tabServices__WEBPACK_IMPORTED_MODULE_10__["TabServices"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AdmissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admission',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admission.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admission/admission.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admission.component.css */ "./src/app/admission/admission.component.css")).default]
    })
], AdmissionComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _school_home_school_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./school-home/school-home.component */ "./src/app/school-home/school-home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _programs_programs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./programs/programs.component */ "./src/app/programs/programs.component.ts");
/* harmony import */ var _student_developments_student_developments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student-developments/student-developments.component */ "./src/app/student-developments/student-developments.component.ts");
/* harmony import */ var _careers_careers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./careers/careers.component */ "./src/app/careers/careers.component.ts");
/* harmony import */ var _reachus_reachus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reachus/reachus.component */ "./src/app/reachus/reachus.component.ts");
/* harmony import */ var _admission_admission_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admission/admission.component */ "./src/app/admission/admission.component.ts");
/* harmony import */ var _create_accounts_create_accounts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-accounts/create-accounts.component */ "./src/app/create-accounts/create-accounts.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _leave_leave_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./leave/leave.component */ "./src/app/leave/leave.component.ts");
/* harmony import */ var _bus_route_bus_route_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bus-route/bus-route.component */ "./src/app/bus-route/bus-route.component.ts");
/* harmony import */ var _holiday_list_holiday_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./holiday-list/holiday-list.component */ "./src/app/holiday-list/holiday-list.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _dialogue_dialogue_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dialogue/dialogue.component */ "./src/app/dialogue/dialogue.component.ts");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/delete/delete.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");






















const appRoutes = [
    {
        path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            {
                path: 'schoolHome', component: _school_home_school_home_component__WEBPACK_IMPORTED_MODULE_5__["SchoolHomeComponent"],
                children: [{
                        path: 'dialogue', component: _dialogue_dialogue_component__WEBPACK_IMPORTED_MODULE_19__["DialogueComponent"]
                    }]
            },
            { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
            { path: 'programs', component: _programs_programs_component__WEBPACK_IMPORTED_MODULE_7__["ProgramsComponent"] },
            { path: 'studev', component: _student_developments_student_developments_component__WEBPACK_IMPORTED_MODULE_8__["StudentDevelopmentsComponent"] },
            { path: 'admission', component: _admission_admission_component__WEBPACK_IMPORTED_MODULE_11__["AdmissionComponent"] },
            { path: 'careers', component: _careers_careers_component__WEBPACK_IMPORTED_MODULE_9__["CareersComponent"] },
            { path: 'reachus', component: _reachus_reachus_component__WEBPACK_IMPORTED_MODULE_10__["ReachusComponent"] },
            {
                path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"],
                children: [{ path: 'delete', component: _delete_delete_component__WEBPACK_IMPORTED_MODULE_20__["DeleteComponent"] },
                    {
                        path: 'edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_21__["EditComponent"]
                    }]
            },
            { path: 'createaccount', component: _create_accounts_create_accounts_component__WEBPACK_IMPORTED_MODULE_12__["CreateAccountsComponent"] },
            { path: 'timetable', component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_13__["TimetableComponent"] },
            { path: 'leave', component: _leave_leave_component__WEBPACK_IMPORTED_MODULE_14__["LeaveComponent"] },
            { path: 'busroutes', component: _bus_route_bus_route_component__WEBPACK_IMPORTED_MODULE_15__["BusRouteComponent"] },
            { path: 'holidaylist', component: _holiday_list_holiday_list_component__WEBPACK_IMPORTED_MODULE_16__["HolidayListComponent"] },
            { path: 'update', component: _update_update_component__WEBPACK_IMPORTED_MODULE_17__["UpdateComponent"] },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }
        ],
    },
    { path: '', pathMatch: 'full', redirectTo: '/home/schoolHome' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n    margin: 0;\r\n    overflow-y: hidden !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _dialogue_dialogue_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialogue/dialogue.component */ "./src/app/dialogue/dialogue.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _school_home_school_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./school-home/school-home.component */ "./src/app/school-home/school-home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _programs_programs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./programs/programs.component */ "./src/app/programs/programs.component.ts");
/* harmony import */ var _student_developments_student_developments_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./student-developments/student-developments.component */ "./src/app/student-developments/student-developments.component.ts");
/* harmony import */ var _admission_admission_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admission/admission.component */ "./src/app/admission/admission.component.ts");
/* harmony import */ var _careers_careers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./careers/careers.component */ "./src/app/careers/careers.component.ts");
/* harmony import */ var _reachus_reachus_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./reachus/reachus.component */ "./src/app/reachus/reachus.component.ts");
/* harmony import */ var _create_accounts_create_accounts_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./create-accounts/create-accounts.component */ "./src/app/create-accounts/create-accounts.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _leave_leave_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./leave/leave.component */ "./src/app/leave/leave.component.ts");
/* harmony import */ var _bus_route_bus_route_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./bus-route/bus-route.component */ "./src/app/bus-route/bus-route.component.ts");
/* harmony import */ var _holiday_list_holiday_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./holiday-list/holiday-list.component */ "./src/app/holiday-list/holiday-list.component.ts");
/* harmony import */ var _information_dialogue_information_dialogue_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./information-dialogue/information-dialogue.component */ "./src/app/information-dialogue/information-dialogue.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _glbspinner_glbspinner_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./glbspinner/glbspinner.component */ "./src/app/glbspinner/glbspinner.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/delete/delete.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");





































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"],
        ],
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _delete_delete_component__WEBPACK_IMPORTED_MODULE_32__["DeleteComponent"],
            _dialogue_dialogue_component__WEBPACK_IMPORTED_MODULE_12__["DialogueComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _school_home_school_home_component__WEBPACK_IMPORTED_MODULE_15__["SchoolHomeComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
            _programs_programs_component__WEBPACK_IMPORTED_MODULE_17__["ProgramsComponent"],
            _student_developments_student_developments_component__WEBPACK_IMPORTED_MODULE_18__["StudentDevelopmentsComponent"],
            _admission_admission_component__WEBPACK_IMPORTED_MODULE_19__["AdmissionComponent"],
            _careers_careers_component__WEBPACK_IMPORTED_MODULE_20__["CareersComponent"],
            _reachus_reachus_component__WEBPACK_IMPORTED_MODULE_21__["ReachusComponent"],
            _create_accounts_create_accounts_component__WEBPACK_IMPORTED_MODULE_22__["CreateAccountsComponent"],
            _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_23__["TimetableComponent"],
            _leave_leave_component__WEBPACK_IMPORTED_MODULE_24__["LeaveComponent"],
            _bus_route_bus_route_component__WEBPACK_IMPORTED_MODULE_25__["BusRouteComponent"],
            _holiday_list_holiday_list_component__WEBPACK_IMPORTED_MODULE_26__["HolidayListComponent"],
            _information_dialogue_information_dialogue_component__WEBPACK_IMPORTED_MODULE_27__["InformationDialogueComponent"],
            _update_update_component__WEBPACK_IMPORTED_MODULE_28__["UpdateComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_29__["ProfileComponent"],
            _glbspinner_glbspinner_component__WEBPACK_IMPORTED_MODULE_30__["GlbspinnerComponent"],
            _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_31__["SpinnerComponent"],
            _edit_edit_component__WEBPACK_IMPORTED_MODULE_33__["EditComponent"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _angular_common__WEBPACK_IMPORTED_MODULE_34__["DatePipe"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        return this.verifyLogin();
        ;
    }
    verifyLogin() {
        if (localStorage.getItem("userName") != null && localStorage.getItem("token") != null) {
            // console.log("verifyLogin true");
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthService = class AuthService {
    constructor() { }
    logout() {
        localStorage.setItem('loginStatus', 'false');
        localStorage.setItem('profileCategory', '');
        localStorage.removeItem('token');
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/bus-route/bus-route.component.css":
/*!***************************************************!*\
  !*** ./src/app/bus-route/bus-route.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iframe-embed {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    height: 90%;\r\n    width: 90%;\r\n    border: 0;\r\n    margin-left: 5%;\r\n    margin-top: 2%;\r\n}\r\n\r\n.iframe-embed-responsive-16by9 {\r\n    padding-bottom: 40.25%;\r\n    width: 100%;\r\n}\r\n\r\n.closebtn {\r\n    position: absolute;\r\n    top: 5%;\r\n    right: 5%;\r\n    padding: 5px;\r\n    line-height: 14px;\r\n    z-index: 1;\r\n    min-width: auto;\r\n}\r\n\r\n.refreshbtn {\r\n    position: absolute;\r\n    top: 5%;\r\n    right: 2%;\r\n    padding: 5px;\r\n    line-height: 14px;\r\n    z-index: 1;\r\n    min-width: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzLXJvdXRlL2J1cy1yb3V0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYnVzLXJvdXRlL2J1cy1yb3V0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlmcmFtZS1lbWJlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi5pZnJhbWUtZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDAuMjUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jbG9zZWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4ucmVmcmVzaGJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUlO1xyXG4gICAgcmlnaHQ6IDIlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/bus-route/bus-route.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bus-route/bus-route.component.ts ***!
  \**************************************************/
/*! exports provided: BusRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusRouteComponent", function() { return BusRouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _service_busRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/busRoute */ "./src/app/service/busRoute.ts");






let BusRouteComponent = class BusRouteComponent {
    constructor(vehicleService, spinner, sanitizer) {
        this.vehicleService = vehicleService;
        this.spinner = spinner;
        this.sanitizer = sanitizer;
        this.showPanel = false;
        this.route_DataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.Columns = [
            'bus_no',
            'first_name',
            'last_name',
            'mobile_no',
            'route',
            //'lat',
            //'lon',
            'map'
        ];
        const route = [];
        this.route_DataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](route);
    }
    set matPaginator(mp) {
        this.paginator = mp;
        this.route_DataSource.paginator = this.paginator;
    }
    ngOnInit() {
        this.showPanel = true;
        this.vehicles();
    }
    ngAfterViewInit() {
        this.route_DataSource.paginator = this.paginator;
        this.route_DataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.route_DataSource.filter = filterValue;
    }
    vehicles() {
        this.vehicleService.vehicle().subscribe((data) => {
            this.route_DataSource.data = data;
            this.spinner.hide();
        });
    }
    mapRefresh() {
        this.vehicleService.mapRefresh(this.bus_no).subscribe((data) => {
            this.vehicle = data;
            console.log(data);
            this.mapView(this.vehicle.bus_no, this.vehicle.lat, this.vehicle.lon);
            this.spinner.hide();
        });
    }
    mapView(bus_no, lat, lon) {
        this.bus_no = bus_no;
        this.showPanel = false;
        this.controllerSrc = this.getSafeUrl(`https://www.google.com/maps?q=${lat},${lon}&output=embed`);
    }
    getSafeUrl(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    onNoClick() {
        this.showPanel = true;
    }
};
BusRouteComponent.ctorParameters = () => [
    { type: _service_busRoute__WEBPACK_IMPORTED_MODULE_5__["BusRoute"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
], BusRouteComponent.prototype, "matPaginator", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false })
], BusRouteComponent.prototype, "sort", void 0);
BusRouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bus-route',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bus-route.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bus-route/bus-route.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bus-route.component.css */ "./src/app/bus-route/bus-route.component.css")).default]
    })
], BusRouteComponent);



/***/ }),

/***/ "./src/app/careers/careers.component.css":
/*!***********************************************!*\
  !*** ./src/app/careers/careers.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmVlcnMvY2FyZWVycy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/careers/careers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/careers/careers.component.ts ***!
  \**********************************************/
/*! exports provided: CareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersComponent", function() { return CareersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CareersComponent = class CareersComponent {
    constructor() { }
    ngOnInit() {
    }
};
CareersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-careers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./careers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/careers/careers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./careers.component.css */ "./src/app/careers/careers.component.css")).default]
    })
], CareersComponent);



/***/ }),

/***/ "./src/app/create-accounts/create-accounts.component.css":
/*!***************************************************************!*\
  !*** ./src/app/create-accounts/create-accounts.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\r\n    color: #000;\r\n}\r\n\r\n.mat-icon {\r\n    color: #000;\r\n    cursor: pointer;\r\n}\r\n\r\n​:host ::ng-deep .mat-focused .mat-form-field-underline .mat-form-field-ripple {\r\n    background: #000;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\r\n    color: #000;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n:host ::ng-deep.mat-form-field-underline {\r\n    background-color: #000 !important;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field-label {\r\n    color: #000;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field-ripple {\r\n    background-color: #1976d2 !important;\r\n}\r\n\r\nmat-label {\r\n    color: #000;\r\n}\r\n\r\nspan {\r\n    color: red;\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n    border-left: none !important;\r\n}\r\n\r\n.ng-valid[required],\r\n.ng-valid.required {\r\n    border-left: none !important;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.red {\r\n    background: #B22222;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.warning {\r\n    background: #DAA520;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.green {\r\n    background: #228B22;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n.formCSS {\r\n    padding-left: 3%;\r\n    padding-right: 3%;\r\n    width: 50%;\r\n}\r\n\r\n.fullButtonCSS {\r\n    margin-top: 2%;\r\n    width: 100%;\r\n}\r\n\r\n.buttonDiv {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.space {\r\n    margin: 1%;\r\n}\r\n\r\n.imgBorder {\r\n    border-radius: 50%;\r\n    height: 10em;\r\n    width: 10em;\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    border: 0.1px #5867bb solid;\r\n    cursor: pointer;\r\n}\r\n\r\n.image-upload>input {\r\n    display: none;\r\n}\r\n\r\n.uploading {\r\n    height: 3em;\r\n    width: 3em;\r\n    position: absolute;\r\n    top: 6.5em;\r\n    left: 3.5em;\r\n    cursor: pointer;\r\n}\r\n\r\n.profileImageDiv {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    margin-left: 38%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWFjY291bnRzL2NyZWF0ZS1hY2NvdW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTs7SUFFSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtYWNjb3VudHMvY3JlYXRlLWFjY291bnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLm1hdC1pY29uIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG7igIs6aG9zdCA6Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDIgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LWxhYmVsIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5uZy1pbnZhbGlkOm5vdChmb3JtKSB7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmctdmFsaWRbcmVxdWlyZWRdLFxyXG4ubmctdmFsaWQucmVxdWlyZWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lci5yZWQge1xyXG4gICAgYmFja2dyb3VuZDogI0IyMjIyMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMTdweCA4MHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyLndhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZDogI0RBQTUyMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMTdweCA4MHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyLmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjhCMjI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDE3cHggODBweDtcclxufVxyXG5cclxuLmZvcm1DU1Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmZ1bGxCdXR0b25DU1Mge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ1dHRvbkRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc3BhY2Uge1xyXG4gICAgbWFyZ2luOiAxJTtcclxufVxyXG5cclxuLmltZ0JvcmRlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwZW07XHJcbiAgICB3aWR0aDogMTBlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3JkZXI6IDAuMXB4ICM1ODY3YmIgc29saWQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZS11cGxvYWQ+aW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnVwbG9hZGluZyB7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIHdpZHRoOiAzZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYuNWVtO1xyXG4gICAgbGVmdDogMy41ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcm9maWxlSW1hZ2VEaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzOCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/create-accounts/create-accounts.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/create-accounts/create-accounts.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateAccountsComponent, passwordMatchValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountsComponent", function() { return CreateAccountsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordMatchValidator", function() { return passwordMatchValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _globalconstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globalconstants */ "./src/app/globalconstants.ts");
/* harmony import */ var _service_profileService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/profileService */ "./src/app/service/profileService.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _service_snackbar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/snackbar.service */ "./src/app/service/snackbar.service.ts");
/* harmony import */ var _dialogue_dialogue_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialogue/dialogue.component */ "./src/app/dialogue/dialogue.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");















let CreateAccountsComponent = class CreateAccountsComponent {
    constructor(formBuilder, router, authService, dialog, spinner, profileService, snackBar, route, datepipe, profileComp) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.dialog = dialog;
        this.spinner = spinner;
        this.profileService = profileService;
        this.snackBar = snackBar;
        this.route = route;
        this.datepipe = datepipe;
        this.profileComp = profileComp;
        this.minPw = 1;
        this.department_Type = null;
        this.profile_Category = null;
        this.emailError = false;
        this.editable = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subscription"]();
    }
    ngOnInit() {
        this.constants();
        this.profileType();
        this.formValidation();
        this.pageCheck();
    }
    setDefaultPic(event) {
        event.target.src = _globalconstants__WEBPACK_IMPORTED_MODULE_6__["Globalconstants"].defaultFilePath;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    preview(files) {
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.snackBar.openSnackBarWarn(_globalconstants__WEBPACK_IMPORTED_MODULE_6__["Globalconstants"].fileType, '');
            return;
        }
        if (files[0].size > _globalconstants__WEBPACK_IMPORTED_MODULE_6__["Globalconstants"].imagesize) {
            this.snackBar.openSnackBarWarn(_globalconstants__WEBPACK_IMPORTED_MODULE_6__["Globalconstants"].errorFileSize, '');
            return false;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
            //this.registerForm.get('profileImage').setValue(files);
            this.selectedFiles = files;
        };
    }
    pageCheck() {
        this.route.queryParams.subscribe(params => {
            this.component = params['component'];
            if (this.component == '2') {
                this.show = !this.show;
                this.buttonText = 'Sign up';
                this.editable = false;
            }
            else if (this.component == '3') {
                this.editable = true;
                this.buttonText = 'Update';
                this.show = this.show;
                let data = JSON.parse(params['profile']);
                this.department(data.profile_catg.profile_category_id);
                this.imgURL = data.profile_url;
                data.passwordConfirm = data.password;
                data.dob = this.datepipe.transform(data.dob, 'yyyy-MM-dd');
                this.registerForm.patchValue(data);
            }
        });
    }
    constants() {
        this.registerTitle = _globalconstants__WEBPACK_IMPORTED_MODULE_6__["Globalconstants"].sign_up;
        this.content = _globalconstants__WEBPACK_IMPORTED_MODULE_6__["Globalconstants"].content;
    }
    formValidation() {
        this.registerForm = this.formBuilder.group({
            id: [''],
            profile_id: [''],
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minPw)]],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobile_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[6-9]\\d{9}')],
            email_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")],
            profile_url: ['',],
            profile_catg: this.formBuilder.group({
                profile_category_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            }),
            dept: this.formBuilder.group({
                dept_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            }),
        }, { validator: passwordMatchValidator });
    }
    profileType() {
        this.profileService.getProfileType().subscribe((data) => {
            this.profile_Category = data;
            this.spinner.hide();
        });
    }
    department(profille_category_id) {
        this.department_Type = null;
        this.spinner.show();
        this.profileService.getDepartments(profille_category_id).subscribe((data) => {
            this.department_Type = data;
            this.spinner.hide();
        });
    }
    emailExist(email) {
        const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (validEmailRegEx.test(email)) {
            this.profileService.emailExist(email).subscribe((data) => {
                if (data === true) {
                    this.snackBar.openSnackBarWarn("Email ID already exist", "");
                }
            });
        }
    }
    mobileExist(mobile) {
        this.profileService.mobileExist(mobile).subscribe((data) => {
            if (data === true) {
                this.snackBar.openSnackBarWarn("Mobile number already exist", "");
            }
        });
    }
    onSubmit(formDirective) {
        this.spinner.show();
        if (this.selectedFiles && this.selectedFiles.length > 0) {
            this.registerForm.get("profile_url").setValue("yes");
        }
        else {
            this.registerForm.get("profile_url").setValue("no");
        }
        this.profileService.getRegister(this.registerForm.value).subscribe((data) => {
            if (data.id != null) {
                this.spinner.hide();
                formDirective.resetForm();
                this.registerForm.reset();
                if (this.selectedFiles && this.selectedFiles.length > 0) {
                    this.upload(data.profile_id);
                }
                else {
                    console.log(_globalconstants__WEBPACK_IMPORTED_MODULE_6__["Globalconstants"].noFile);
                }
                if (this.component == '2') {
                    this.dialogue(data.profile_id, data.first_name, data.last_name);
                }
                else if (this.component == '3') {
                    localStorage.setItem('page', _globalconstants__WEBPACK_IMPORTED_MODULE_6__["Globalconstants"].edit_profile);
                    this.router.navigateByUrl('/home/profile');
                }
            }
            else {
                this.snackBar.openSnackBarError("Please check your mobile number and email ID", "");
                this.spinner.hide();
            }
        }),
            error => {
                console.log(error);
                this.snackBar.openSnackBarError("Unable to process the webservice", "");
                this.spinner.hide();
            },
            () => { };
    }
    upload(profile_id) {
        //check file size less than 10 MB
        if ((this.selectedFiles.item(0).size / 1024 / 1024 < 10)) {
            this.spinner.show();
            this.currentFileUpload = this.selectedFiles.item(0);
            this.subscription.add(this.profileService.pushFileToStorage(this.currentFileUpload, profile_id, _globalconstants__WEBPACK_IMPORTED_MODULE_6__["Globalconstants"].profileFolder)
                .subscribe(event => {
                this.spinner.hide();
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpEventType"].UploadProgress) {
                    // this.progress.percentage = Math.round(100 * event.loaded / event.total);
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpResponse"]) {
                    this.imgURL = _globalconstants__WEBPACK_IMPORTED_MODULE_6__["Globalconstants"].defaultFilePath;
                }
                this.selectedFiles = undefined;
            }, error => {
                this.spinner.hide();
                this.snackBar.openSnackBarError(_globalconstants__WEBPACK_IMPORTED_MODULE_6__["Globalconstants"].errorMessage, "");
            }));
        }
        else {
            this.snackBar.openSnackBarWarn(_globalconstants__WEBPACK_IMPORTED_MODULE_6__["Globalconstants"].imageSizeError, '');
        }
    }
    cancel() {
        if (this.component == '2') {
            this.router.navigateByUrl('/home/profile');
        }
        else if (this.component == '3') {
            localStorage.setItem('page', _globalconstants__WEBPACK_IMPORTED_MODULE_6__["Globalconstants"].edit_profile);
            this.router.navigateByUrl('/home/profile');
        }
    }
    dialogue(profile_id, first_name, last_name) {
        this.dialog.open(_dialogue_dialogue_component__WEBPACK_IMPORTED_MODULE_10__["DialogueComponent"], {
            width: _globalconstants__WEBPACK_IMPORTED_MODULE_6__["Globalconstants"].width_reponse,
            height: _globalconstants__WEBPACK_IMPORTED_MODULE_6__["Globalconstants"].height_reponse,
            data: {
                profile_id: profile_id, first_name: first_name, last_name: last_name
            }
        }),
            this.dialog.afterAllClosed.subscribe(result => {
            });
    }
    get password() { return this.registerForm.get('password'); }
    get passwordConfirm() { return this.registerForm.get('passwordConfirm'); }
    onPasswordInput() {
        if (this.registerForm.hasError('passwordMismatch'))
            this.passwordConfirm.setErrors([{ 'passwordMismatch': true }]);
        else
            this.passwordConfirm.setErrors(null);
    }
};
CreateAccountsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
    { type: _service_profileService__WEBPACK_IMPORTED_MODULE_7__["ProfileService"] },
    { type: _service_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["SnackbarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"] },
    { type: _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"] }
];
CreateAccountsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-accounts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-accounts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-accounts/create-accounts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-accounts.component.css */ "./src/app/create-accounts/create-accounts.component.css")).default]
    })
], CreateAccountsComponent);

const passwordMatchValidator = (formGroup) => {
    if (formGroup.get('password').value === formGroup.get('passwordConfirm').value)
        return null;
    else
        return { passwordMismatch: true };
};


/***/ }),

/***/ "./src/app/delete/delete.component.css":
/*!*********************************************!*\
  !*** ./src/app/delete/delete.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dialogText {\r\n    font-size: 30px;\r\n    margin: auto;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container {\r\n    background: green;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 90px;\r\n}\r\n\r\n::ng-deep .mat-simple-snackbar {\r\n    text-align: center;\r\n}\r\n\r\n::ng-deep .mat-dialog-container {\r\n    overflow: hidden !important;\r\n}\r\n\r\n.buttonDiv {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin-top: 5%;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    width: 100%;\r\n}\r\n\r\n.mainDiv {\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.dialog-confirm {\r\n    font-weight: 500;\r\n    width: 60%;\r\n    margin-left: -1em;\r\n    margin-bottom: -1em;\r\n    padding-bottom: 0.25em;\r\n    text-align: center;\r\n    font-size: 1.75em;\r\n    background-color: var(--darkblue);\r\n    color: var(--white);\r\n    cursor: pointer;\r\n}\r\n\r\n.dialog-cancel {\r\n    font-weight: 500;\r\n    width: 60%;\r\n    margin-right: -1em;\r\n    margin-bottom: -1em;\r\n    padding-bottom: 0.25em;\r\n    text-align: center;\r\n    font-size: 1.75em;\r\n    background-color: var(--dark-grey);\r\n    color: var(--white);\r\n    cursor: pointer;\r\n}\r\n\r\n.labelText {\r\n    margin-top: 3%;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZ1RleHQge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMTdweCA5MHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zaW1wbGUtc25hY2tiYXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ1dHRvbkRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFpbkRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRpYWxvZy1jb25maXJtIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS43NWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsdWUpO1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRpYWxvZy1jYW5jZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS43NWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sYWJlbFRleHQge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/delete/delete.component.ts":
/*!********************************************!*\
  !*** ./src/app/delete/delete.component.ts ***!
  \********************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _service_commonServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/commonServices */ "./src/app/service/commonServices.ts");
/* harmony import */ var _service_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/snackbar.service */ "./src/app/service/snackbar.service.ts");







let DeleteComponent = class DeleteComponent {
    constructor(dialogRef, data, deleteService, spinner, snackBar, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.deleteService = deleteService;
        this.spinner = spinner;
        this.snackBar = snackBar;
        this.router = router;
        dialogRef.disableClose = true;
    }
    ngOnInit() {
        this.profileData();
    }
    profileData() {
        if (this.data.component = '1') {
            this.profile_id = this.data.profile_id;
            this.profile_category_id = this.data.profile_category_id;
            this.name = this.data.first_name + " " + this.data.last_name;
            this.messsage = 'Do you want to delete the profile ID ' + this.profile_id
                + ' - ' + this.name;
        }
        if ((this.data.component = '4') || (this.data.component = '5')) {
            this.programs_id = this.data.programs_id;
            this.messsage = 'Do you want to delete the function details';
        }
    }
    deleteProfile() {
        this.spinner.show();
        if (this.data.component = '1') {
            this.deleteService.deleteProfile(this.profile_id, this.profile_category_id).subscribe((data) => {
                if (data == true) {
                    this.router.navigateByUrl('/home/profile');
                    this.snackBar.openSnackBarSuccess("Profile deleted successfully", "");
                }
                else {
                    this.snackBar.openSnackBarError("Profile can,t deleted", "");
                }
                this.spinner.hide();
            });
        }
        if (this.data.component = '4') {
            this.deleteService.deletePrograms(this.programs_id).subscribe((data) => {
                if (data == 1) {
                    this.router.navigateByUrl('/home/programs');
                    this.snackBar.openSnackBarSuccess("Profile deleted successfully", "");
                }
                else {
                    this.snackBar.openSnackBarError("Profile can,t deleted", "");
                }
                this.spinner.hide();
            });
        }
        if (this.data.component = '5') {
            this.deleteService.deleteStudentDevelopments(this.programs_id).subscribe((data) => {
                if (data == 1) {
                    this.router.navigateByUrl('/home/studev');
                    this.snackBar.openSnackBarSuccess("Profile deleted successfully", "");
                }
                else {
                    this.snackBar.openSnackBarError("Profile can,t deleted", "");
                }
                this.spinner.hide();
            });
        }
    }
};
DeleteComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _service_commonServices__WEBPACK_IMPORTED_MODULE_5__["CommonServices"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: _service_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/delete/delete.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete.component.css */ "./src/app/delete/delete.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DeleteComponent);



/***/ }),

/***/ "./src/app/dialogue/dialogue.component.css":
/*!*************************************************!*\
  !*** ./src/app/dialogue/dialogue.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-dialog-container {\r\n    overflow: hidden !important;\r\n}\r\n\r\n.buttonDialogue {\r\n    width: 5em;\r\n    background: #5867bb;\r\n    color: #fff;\r\n    margin-Top: 2em;\r\n}\r\n\r\n.buttonDiv {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.dialog-headline {\r\n    font-weight: 500;\r\n    margin-top: -1em;\r\n    margin-left: -1em;\r\n    margin-right: -1em;\r\n    margin-bottom: 0;\r\n    padding-bottom: 0.25em;\r\n    text-align: center;\r\n    font-size: 1.75em;\r\n    background-color: rgb(33, 153, 3);\r\n    color: var(--white);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ndWUvZGlhbG9ndWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2d1ZS9kaWFsb2d1ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXR0b25EaWFsb2d1ZSB7XHJcbiAgICB3aWR0aDogNWVtO1xyXG4gICAgYmFja2dyb3VuZDogIzU4NjdiYjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLVRvcDogMmVtO1xyXG59XHJcblxyXG4uYnV0dG9uRGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaWFsb2ctaGVhZGxpbmUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi10b3A6IC0xZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTFlbTtcclxuICAgIG1hcmdpbi1yaWdodDogLTFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjc1ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzMsIDE1MywgMyk7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/dialogue/dialogue.component.ts":
/*!************************************************!*\
  !*** ./src/app/dialogue/dialogue.component.ts ***!
  \************************************************/
/*! exports provided: DialogueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogueComponent", function() { return DialogueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let DialogueComponent = class DialogueComponent {
    constructor(dialogRef, formBuilder, data) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.data = data;
        dialogRef.disableClose = true;
    }
    ngOnInit() {
        this.profileData();
    }
    profileData() {
        this.profile_id = this.data.profile_id;
        this.name = this.data.first_name + " " + this.data.last_name;
    }
    closeDialogue() {
        this.dialogRef.close();
    }
};
DialogueComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialogue',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialogue.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogue/dialogue.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialogue.component.css */ "./src/app/dialogue/dialogue.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DialogueComponent);



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".parentDiv {}\r\n\r\n.titleText {\r\n    text-align: center;\r\n    margin-top: -1.5em;\r\n}\r\n\r\n/* .dialogText {\r\n    font-size: 30px;\r\n    margin: auto;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container {\r\n    background: green;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 90px;\r\n}\r\n\r\n::ng-deep .mat-simple-snackbar {\r\n    text-align: center;\r\n}\r\n\r\n::ng-deep .mat-dialog-container {\r\n    overflow: hidden !important;\r\n}\r\n\r\n.buttonDiv {\r\n    display: flex;\r\n    margin-top: 5%;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    width: 100%;\r\n}\r\n\r\n.mainDiv {\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.dialog-confirm {\r\n    font-weight: 500;\r\n    width: 60%;\r\n    margin-left: -1em;\r\n    margin-bottom: -1em;\r\n    padding-bottom: 0.25em;\r\n    text-align: center;\r\n    font-size: 1.75em;\r\n    background-color: var(--darkblue);\r\n    color: var(--white);\r\n    cursor: pointer;\r\n}\r\n\r\n.dialog-cancel {\r\n    font-weight: 500;\r\n    width: 60%;\r\n    margin-right: -1em;\r\n    margin-bottom: -1em;\r\n    padding-bottom: 0.25em;\r\n    text-align: center;\r\n    font-size: 1.75em;\r\n    background-color: var(--dark-grey);\r\n    color: var(--white);\r\n    cursor: pointer;\r\n}\r\n\r\n.labelText {\r\n    margin-top: 3%;\r\n    font-size: 18px;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTs7QUFFWjtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtRUciLCJmaWxlIjoic3JjL2FwcC9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnREaXYge31cclxuXHJcbi50aXRsZVRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTEuNWVtO1xyXG59XHJcblxyXG5cclxuLyogLmRpYWxvZ1RleHQge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMTdweCA5MHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zaW1wbGUtc25hY2tiYXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ1dHRvbkRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFpbkRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRpYWxvZy1jb25maXJtIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS43NWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsdWUpO1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRpYWxvZy1jYW5jZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS43NWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sYWJlbFRleHQge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn0gKi8iXX0= */");

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _service_commonServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/commonServices */ "./src/app/service/commonServices.ts");
/* harmony import */ var _service_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/snackbar.service */ "./src/app/service/snackbar.service.ts");







let EditComponent = class EditComponent {
    constructor(dialogRef, data, deleteService, spinner, snackBar, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.deleteService = deleteService;
        this.spinner = spinner;
        this.snackBar = snackBar;
        this.router = router;
        dialogRef.disableClose = true;
    }
    ngOnInit() {
        this.profileData();
    }
    profileData() {
        if (this.data.component = '1') {
            this.profile_id = this.data.profile_id;
            this.profile_category_id = this.data.profile_category_id;
            this.name = this.data.first_name + " " + this.data.last_name;
            this.messsage = 'Do you want to delete the profile ID ' + this.profile_id
                + ' - ' + this.name;
        }
    }
};
EditComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _service_commonServices__WEBPACK_IMPORTED_MODULE_5__["CommonServices"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: _service_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], EditComponent);



/***/ }),

/***/ "./src/app/glbspinner/glbspinner.component.css":
/*!*****************************************************!*\
  !*** ./src/app/glbspinner/glbspinner.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsYnNwaW5uZXIvZ2xic3Bpbm5lci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/glbspinner/glbspinner.component.ts":
/*!****************************************************!*\
  !*** ./src/app/glbspinner/glbspinner.component.ts ***!
  \****************************************************/
/*! exports provided: GlbspinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlbspinnerComponent", function() { return GlbspinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");



let GlbspinnerComponent = class GlbspinnerComponent {
    constructor(spinner) {
        this.spinner = spinner;
    }
    ngOnInit() {
        this.spinner.show();
    }
};
GlbspinnerComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
];
GlbspinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-glbspinner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./glbspinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/glbspinner/glbspinner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./glbspinner.component.css */ "./src/app/glbspinner/glbspinner.component.css")).default]
    })
], GlbspinnerComponent);



/***/ }),

/***/ "./src/app/globalconstants.ts":
/*!************************************!*\
  !*** ./src/app/globalconstants.ts ***!
  \************************************/
/*! exports provided: Globalconstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globalconstants", function() { return Globalconstants; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var Globalconstants_1;


let Globalconstants = Globalconstants_1 = class Globalconstants {
};
Globalconstants.baseUrl = "https://schoolweb.azurewebsites.net";
//Login
Globalconstants.sign_in = "Sign in";
Globalconstants.sign_up = "Sign up";
Globalconstants.content = "to continue for additional features";
//Title
Globalconstants.title = "Sanskaar Valley School";
//School Home
Globalconstants.school_home_title = "Welcome to The Sanskaar Valley School";
Globalconstants.school_home_content = "Besides avoiding the seven fatal mistakes in school website design, all of the schools in my top 10 do several things right. Responsive design (adapting to any mobile device) and social media integration are driving many of today’s best designs. Because your website needs to be ‘readily’ viewed on any number of mobile devices, a clear, well-organized navigation is critical to being compatible with responsive frameworks. Visitors should also be given many opportunities to engage via your popular social media channels. Many of today’s savvy school websites are taking a queue from the commercial websites that feature a grid approach and card layout (think Pinterest), that relies on scrolling to create a descending order of priority that schools want to use for their messaging. This best-practice formate allows website visitors to determine what order they want to read the content. Also, high-quality feature images (more faces the better, right?) and videos score high points in my eyes.";
//Snack bar
Globalconstants.snackBarTimeout = 4000;
//Delete dialogue
Globalconstants.width_delete = '30%';
Globalconstants.height_delete = '37%';
//Delete dialogue
Globalconstants.width_edit = '60%';
Globalconstants.height_edit = '60%';
//Result response
Globalconstants.width_reponse = '40%';
Globalconstants.height_reponse = '32%';
//Route item ID
Globalconstants.profile = '1';
Globalconstants.create_profile = '2';
Globalconstants.edit_profile = '3';
Globalconstants.delete_programs = '4';
Globalconstants.delete_student_developments = '5';
Globalconstants.busroutes = '5';
Globalconstants.update = '2';
Globalconstants.feedback = '2';
//profile content
Globalconstants.imagesize = 2097152;
Globalconstants.errorFileSize = 'Maximum size allowed is ' + Globalconstants_1.imagesize / 1024 / 1024 + 'Mb';
Globalconstants.errorMessage = "Error while uploading the profile image";
Globalconstants.noFile = "No file has been selected";
Globalconstants.imageSizeError = "Please upload the image size less than 2 MB";
Globalconstants.defaultFilePath = '/assets/images/defaultProfile.png';
Globalconstants.profileFolder = 'Profile';
Globalconstants.schoolProfileFolder = 'SchoolProfile';
Globalconstants.schoolAboutFolder = 'SchoolAbout';
Globalconstants.schoolProgramsFolder = 'SchoolPrograms';
Globalconstants.schoolStudentDevelopmentFolder = "SchoolStudentsDevelopment";
//Mapping url
Globalconstants.schoolUrl = '/school/';
Globalconstants.vehicleUrl = '/schoolvehicle/';
Globalconstants = Globalconstants_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Globalconstants);



/***/ }),

/***/ "./src/app/holiday-list/holiday-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/holiday-list/holiday-list.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbGlkYXktbGlzdC9ob2xpZGF5LWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/holiday-list/holiday-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/holiday-list/holiday-list.component.ts ***!
  \********************************************************/
/*! exports provided: HolidayListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayListComponent", function() { return HolidayListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HolidayListComponent = class HolidayListComponent {
    constructor() { }
    ngOnInit() {
    }
};
HolidayListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-holiday-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./holiday-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/holiday-list/holiday-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./holiday-list.component.css */ "./src/app/holiday-list/holiday-list.component.css")).default]
    })
], HolidayListComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\r\n    background-color: var(--darkblue);\r\n    color: var(--white);\r\n    height: auto;\r\n}\r\n\r\nimg {\r\n    width: 5%;\r\n    height: 75%;\r\n}\r\n\r\n.topMenu {\r\n    margin-left: 17%;\r\n    margin-right: 17%;\r\n}\r\n\r\n.mat-list-item {\r\n    color: var(--black) !important;\r\n}\r\n\r\n.sidenav {\r\n    background: var(--grey);\r\n    width: 15%;\r\n}\r\n\r\n.active-list-item {\r\n    color: var(--black);\r\n    font-weight: var(--bold);\r\n}\r\n\r\n.active-menu-item {\r\n    color: var(--white);\r\n    font-weight: var(--bold);\r\n}\r\n\r\n.mat-drawer.mat-drawer-side {\r\n    z-index: 1!important;\r\n}\r\n\r\n.mat-drawer-content {\r\n    z-index: auto!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibHVlKTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxufVxyXG5cclxuLnRvcE1lbnUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE3JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTclO1xyXG59XHJcblxyXG4ubWF0LWxpc3QtaXRlbSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZXkpO1xyXG4gICAgd2lkdGg6IDE1JTtcclxufVxyXG5cclxuLmFjdGl2ZS1saXN0LWl0ZW0ge1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1ib2xkKTtcclxufVxyXG5cclxuLmFjdGl2ZS1tZW51LWl0ZW0ge1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1ib2xkKTtcclxufVxyXG5cclxuLm1hdC1kcmF3ZXIubWF0LWRyYXdlci1zaWRlIHtcclxuICAgIHotaW5kZXg6IDEhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWRyYXdlci1jb250ZW50IHtcclxuICAgIHotaW5kZXg6IGF1dG8haW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");




let HomeComponent = class HomeComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        if (localStorage.getItem('loginStatus') === 'true') {
            this.signText = "Sign out";
        }
        else {
            this.signText = "Sign in";
        }
    }
    routePath(path) {
        console.log(path);
        if (path === '' && localStorage.getItem('loginStatus') === 'true') {
            this.authService.logout();
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate(['/home/schoolHome']);
            this.signText = this.signText = "Sign in";
        }
        else {
            localStorage.setItem("pageRedirection", path);
            if (localStorage.getItem('loginStatus') === 'true') {
                this.router.navigate([path]);
                this.signText = this.signText = "Sign out";
            }
            else {
                this.authService.logout();
                this.router.navigate(['/home/login']);
                this.signText = this.signText = "Sign in";
            }
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/information-dialogue/information-dialogue.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/information-dialogue/information-dialogue.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm9ybWF0aW9uLWRpYWxvZ3VlL2luZm9ybWF0aW9uLWRpYWxvZ3VlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/information-dialogue/information-dialogue.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/information-dialogue/information-dialogue.component.ts ***!
  \************************************************************************/
/*! exports provided: InformationDialogueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationDialogueComponent", function() { return InformationDialogueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InformationDialogueComponent = class InformationDialogueComponent {
    constructor() { }
    ngOnInit() {
    }
};
InformationDialogueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-information-dialogue',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./information-dialogue.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/information-dialogue/information-dialogue.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./information-dialogue.component.css */ "./src/app/information-dialogue/information-dialogue.component.css")).default]
    })
], InformationDialogueComponent);



/***/ }),

/***/ "./src/app/leave/leave.component.css":
/*!*******************************************!*\
  !*** ./src/app/leave/leave.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXZlL2xlYXZlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/leave/leave.component.ts":
/*!******************************************!*\
  !*** ./src/app/leave/leave.component.ts ***!
  \******************************************/
/*! exports provided: LeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveComponent", function() { return LeaveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LeaveComponent = class LeaveComponent {
    constructor() { }
    ngOnInit() {
    }
};
LeaveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leave',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leave.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/leave/leave.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leave.component.css */ "./src/app/leave/leave.component.css")).default]
    })
], LeaveComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\r\n    color: #000;\r\n}\r\n\r\n.mat-icon {\r\n    color: #000;\r\n    cursor: pointer;\r\n}\r\n\r\n​:host ::ng-deep .mat-focused .mat-form-field-underline .mat-form-field-ripple {\r\n    background: #000;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\r\n    color: #000;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n:host ::ng-deep.mat-form-field-underline {\r\n    background-color: #000 !important;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field-label {\r\n    color: #000;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field-ripple {\r\n    background-color: #1976d2 !important;\r\n}\r\n\r\nmat-label {\r\n    color: #000;\r\n}\r\n\r\nspan {\r\n    color: red;\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n    border-left: none !important;\r\n}\r\n\r\n.ng-valid[required],\r\n.ng-valid.required {\r\n    border-left: none !important;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.red {\r\n    background: #B22222;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.warning {\r\n    background: #DAA520;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.green {\r\n    background: #228B22;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n.centerDiv {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n}\r\n\r\n.centerContentDiv {\r\n    text-align: center;\r\n}\r\n\r\n.formCSS {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n    padding-top: 1%;\r\n    padding-bottom: 3%;\r\n    width: 30%;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n.buttonCSS {\r\n    width: 111%;\r\n    background: #5867bb;\r\n    color: #fff;\r\n    margin-left: -5%;\r\n}\r\n\r\n.bottomView {\r\n    width: 100%;\r\n    color: black;\r\n    margin-top: 10%;\r\n}\r\n\r\n.forgetCSS {\r\n    cursor: pointer;\r\n}\r\n\r\n.my-mat-hint {\r\n    line-height: 2.2em;\r\n    -webkit-transform: translateY(2%);\r\n            transform: translateY(2%);\r\n    font-size: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbuKAizpob3N0IDo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtbGFiZWwge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZy12YWxpZFtyZXF1aXJlZF0sXHJcbi5uZy12YWxpZC5yZXF1aXJlZCB7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyLnJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQjIyMjIyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDgwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNuYWNrLWJhci1jb250YWluZXIud2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjREFBNTIwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDgwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNuYWNrLWJhci1jb250YWluZXIuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzIyOEIyMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMTdweCA4MHB4O1xyXG59XHJcblxyXG4uY2VudGVyRGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY2VudGVyQ29udGVudERpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtQ1NTIHtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAgIHBhZGRpbmctdG9wOiAxJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uQ1NTIHtcclxuICAgIHdpZHRoOiAxMTElO1xyXG4gICAgYmFja2dyb3VuZDogIzU4NjdiYjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01JTtcclxufVxyXG5cclxuLmJvdHRvbVZpZXcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5mb3JnZXRDU1Mge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubXktbWF0LWhpbnQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuMmVtO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIlKTtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _globalconstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globalconstants */ "./src/app/globalconstants.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _service_profileService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/profileService */ "./src/app/service/profileService.ts");
/* harmony import */ var _service_snackbar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/snackbar.service */ "./src/app/service/snackbar.service.ts");











let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, authService, dialog, homecomponent, profileService, spinner, snackBar, s) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.dialog = dialog;
        this.homecomponent = homecomponent;
        this.profileService = profileService;
        this.spinner = spinner;
        this.snackBar = snackBar;
        this.s = s;
        this.profile_Category = null;
        this.hidePassword1 = null;
    }
    ngOnInit() {
        this.formValidation();
        this.constants();
        this.profileType();
    }
    constants() {
        this.loginTitle = _globalconstants__WEBPACK_IMPORTED_MODULE_6__["Globalconstants"].sign_in;
        this.content = _globalconstants__WEBPACK_IMPORTED_MODULE_6__["Globalconstants"].content;
    }
    formValidation() {
        this.loginForm = this.formBuilder.group({
            email_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            profile_catg: this.formBuilder.group({
                profile_category_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
            }),
        });
    }
    profileType() {
        this.spinner.show();
        this.profileService.getProfileType().subscribe((data) => {
            var newData = this.filterData('Admin', data);
            this.profile_Category = newData;
            this.spinner.hide();
        });
    }
    filterData(profile_type, data) {
        return data.filter(object => {
            return object['profile_type'] != profile_type;
        });
    }
    onSubmit() {
        this.spinner.show();
        this.profileService.getLogin(this.loginForm.value).subscribe((data) => {
            if (data != null) {
                if (data.profile_id != null) {
                    localStorage.setItem('loginStatus', 'true');
                    localStorage.setItem('profileCategory', data.profile_catg.profile_category_id);
                    localStorage.setItem('studentProfile', JSON.stringify(data));
                    this.spinner.hide();
                    this.router.navigateByUrl(localStorage.getItem("pageRedirection"));
                    this.homecomponent.signText = "Sign out";
                }
                else {
                    this.snackBar.openSnackBarError("Please check your login credential", "");
                    this.spinner.hide();
                }
            }
            else {
                this.snackBar.openSnackBarError("Please check your login credential", "");
                this.spinner.hide();
            }
        });
    }
    forgetPassword() {
        this.router.navigateByUrl('/forgetpassword');
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { type: _service_profileService__WEBPACK_IMPORTED_MODULE_9__["ProfileService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
    { type: _service_snackbar_service__WEBPACK_IMPORTED_MODULE_10__["SnackbarService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .parentProfile {\r\n    margin-top: 1%;\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: var(--white);\r\n}\r\n\r\n.space {\r\n    margin-left: 3%;\r\n}\r\n\r\n.firstSpace {\r\n    margin-top: 1%;\r\n}\r\n\r\n.endSpace {\r\n    margin-top: 1%;\r\n    margin-left: 1%;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    z-index: 0;\r\n}\r\n\r\nth.mat-header-cell {\r\n    text-align: left;\r\n    color: var(--white);\r\n    background-color: var(--darkblue);\r\n}\r\n\r\n.tableMargin {\r\n    margin-left: 2%;\r\n    margin-right: 2%;\r\n    max-height: 63vh;\r\n    height: 63vh;\r\n    overflow: auto;\r\n}\r\n\r\n.add-comment-container {\r\n    position: relative;\r\n    height: 5rem;\r\n    background-color: white;\r\n    z-index: 1;\r\n    left: 20%;\r\n    border: solid 1px green;\r\n    border-radius: 20%;\r\n    padding: 5%;\r\n}\r\n\r\n.commentComtainer {\r\n    position: absolute;\r\n}\r\n\r\ntd {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    text-align: center !important;\r\n}\r\n\r\nth {\r\n    text-align: center !important;\r\n}\r\n\r\n.mat-success {\r\n    background-color: var(--green);\r\n    color: #fff;\r\n}\r\n\r\n.profileImage {\r\n    padding: 0%;\r\n    width: 300px;\r\n    min-height: 300px;\r\n    max-height: auto;\r\n    float: left;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.profileContentDiv {\r\n    display: flex;\r\n    width: 60%;\r\n    height: 60vh;\r\n}\r\n\r\n.profileChildContentDiv {\r\n    margin-left: 3%;\r\n    width: 100%;\r\n}\r\n\r\n.bottomAlign {\r\n    position: absolute;\r\n    width: 53%;\r\n    bottom: 5%;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.formCSS {\r\n    width: 70%;\r\n}\r\n\r\n.textAlign {\r\n    display: flex;\r\n}\r\n\r\n.divleftWidth {\r\n    width: 35%;\r\n}\r\n\r\n.divRightWidth {\r\n    width: 65%;\r\n}\r\n\r\n.imgBorder {\r\n    border-radius: 50%;\r\n    height: 3em;\r\n    width: 3em;\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    border: 0.1px #5867bb solid;\r\n}\r\n\r\n.pageDiv {\r\n    display: flex;\r\n    background-color: var(--darkblue);\r\n    position: absolute;\r\n    bottom: 0px;\r\n    margin-bottom: 1%;\r\n    width: 88em;\r\n}\r\n\r\n.tableDiv {\r\n    position: relative;\r\n    max-height: 500px;\r\n}\r\n\r\n.mat-table {\r\n    overflow: auto;\r\n    max-height: 70px;\r\n}\r\n\r\n.matPage {\r\n    background-color: var(--darkblue);\r\n    color: white;\r\n    position: absolute;\r\n    right: 0px;\r\n}\r\n\r\n.filerInput {\r\n    color: white;\r\n}\r\n\r\n.paginationForm.mat-form-field-appearance-legacy .mat-input-element {\r\n    color: white;\r\n}\r\n\r\n.matPage .mat-form-field-underline {\r\n    background-color: white !important;\r\n}\r\n\r\n.matPage .mat-form-field-ripple {\r\n    background-color: white !important;\r\n}\r\n\r\n.paginationForm .mat-form-field-underline {\r\n    background-color: white !important;\r\n}\r\n\r\n.paginationForm .mat-form-field-ripple {\r\n    background-color: white !important;\r\n}\r\n\r\n.matPage .mat-select-value {\r\n    font-size: 1em;\r\n    color: white;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVMRyIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLnBhcmVudFByb2ZpbGUge1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbi5zcGFjZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbn1cclxuXHJcbi5maXJzdFNwYWNlIHtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG59XHJcblxyXG4uZW5kU3BhY2Uge1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbnRoLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibHVlKTtcclxufVxyXG5cclxuLnRhYmxlTWFyZ2luIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICBtYXgtaGVpZ2h0OiA2M3ZoO1xyXG4gICAgaGVpZ2h0OiA2M3ZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5hZGQtY29tbWVudC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLmNvbW1lbnRDb210YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRoIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5wcm9maWxlSW1hZ2Uge1xyXG4gICAgcGFkZGluZzogMCU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IGF1dG87XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5wcm9maWxlQ29udGVudERpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNjB2aDtcclxufVxyXG5cclxuLnByb2ZpbGVDaGlsZENvbnRlbnREaXYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ib3R0b21BbGlnbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTMlO1xyXG4gICAgYm90dG9tOiA1JTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmZvcm1DU1Mge1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLnRleHRBbGlnbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZGl2bGVmdFdpZHRoIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbn1cclxuXHJcbi5kaXZSaWdodFdpZHRoIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbn1cclxuXHJcbi5pbWdCb3JkZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICB3aWR0aDogM2VtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvcmRlcjogMC4xcHggIzU4NjdiYiBzb2xpZDtcclxufVxyXG5cclxuLnBhZ2VEaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibHVlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgICB3aWR0aDogODhlbTtcclxufVxyXG5cclxuLnRhYmxlRGl2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4ubWF0LXRhYmxlIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNzBweDtcclxufVxyXG5cclxuLm1hdFBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsdWUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmZpbGVySW5wdXQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbkZvcm0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1hdFBhZ2UgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0UGFnZSAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uRm9ybSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uRm9ybSAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXRQYWdlIC5tYXQtc2VsZWN0LXZhbHVlIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59ICovIl19 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_profileService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/profileService */ "./src/app/service/profileService.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _service_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/snackbar.service */ "./src/app/service/snackbar.service.ts");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../delete/delete.component */ "./src/app/delete/delete.component.ts");
/* harmony import */ var _globalconstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../globalconstants */ "./src/app/globalconstants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var ProfileComponent_1;













let ProfileComponent = ProfileComponent_1 = class ProfileComponent {
    constructor(formBuilder, profileService, snackBar, spinner, dialog, router) {
        this.formBuilder = formBuilder;
        this.profileService = profileService;
        this.snackBar = snackBar;
        this.spinner = spinner;
        this.dialog = dialog;
        this.router = router;
        this.profile_Category = null;
        this.department_Type = null;
        this.showPanel = false;
        this.showBtn = false;
        this.profileBtn = false;
        this.Columns = [
            'profileid',
            'first_name',
            'last_name',
            'dob',
            'mobile_no',
            'email_id',
            'profile_category_type',
            'dept_id',
            'profile_image',
            'details'
        ];
        this.mat_DataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        const profile = [];
        this.mat_DataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](profile);
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.mat_DataSource.filter = filterValue;
    }
    ngOnInit() {
        if (localStorage.getItem('profileCategory') === '1') {
            this.showPanel = true;
            this.showBtn = true;
            this.spinner.show();
            this.validateForm();
            this.profileType();
        }
        else if (localStorage.getItem('profileCategory') === '2') {
            this.showPanel = true;
            this.showBtn = false;
            this.spinner.show();
            this.validateForm();
            this.profileType();
        }
        else if (localStorage.getItem('profileCategory') === '3') {
            this.showPanel = false;
            this.showBtn = false;
            this.studentProfile = JSON.parse(localStorage.getItem('studentProfile'));
        }
        if (localStorage.getItem('page') == '3') {
            this.profile_Service(JSON.parse(localStorage.getItem('profileData')));
        }
    }
    ngAfterViewInit() {
        this.mat_DataSource.paginator = this.paginator;
        this.mat_DataSource.sort = this.sort;
    }
    validateForm() {
        this.profileForm = this.formBuilder.group({
            profile_id: [],
            mobile_no: [],
            profile_catg: this.formBuilder.group({
                profile_category_id: []
            }),
            dept: this.formBuilder.group({
                dept_id: []
            }),
        });
    }
    profileType() {
        this.profileService.getProfileType().subscribe((data) => {
            this.profile_Category = data;
            this.spinner.hide();
        });
    }
    viewProfile(element) {
        if (localStorage.getItem('profileCategory') === '1') {
            this.showPanel = false;
            this.showBtn = true;
            this.profileBtn = true;
        }
        else if (localStorage.getItem('profileCategory') === '2') {
            this.showPanel = false;
            this.showBtn = false;
            this.profileBtn = true;
        }
        else if (localStorage.getItem('profileCategory') === '3') {
            this.showPanel = false;
            this.showBtn = false;
            this.profileBtn = false;
        }
        this.studentProfile = element;
        console.log('sdfsaf  ', this.studentProfile.profile_url);
    }
    setDefaultPic(event) {
        event.target.src = _globalconstants__WEBPACK_IMPORTED_MODULE_8__["Globalconstants"].defaultFilePath;
    }
    closeProfileView() {
        if (localStorage.getItem('profileCategory') === '1') {
            this.showPanel = true;
            this.showBtn = true;
        }
        else if (localStorage.getItem('profileCategory') === '2') {
            this.showPanel = true;
            this.showBtn = false;
        }
        else if (localStorage.getItem('profileCategory') === '3') {
            this.showPanel = false;
            this.showBtn = false;
        }
    }
    department(admin_id) {
        this.department_Type = null;
        this.spinner.show();
        this.profileService.getDepartments(admin_id).subscribe((data) => {
            this.department_Type = data;
            this.spinner.hide();
        });
    }
    onSubmit(profileValue) {
        this.profile_category_id = profileValue.profile_catg.profile_category_id;
        this.dept_id = profileValue.dept.dept_id;
        this.profile_id = profileValue.profile_id;
        try {
            this.profile_id = this.profile_id.trim();
        }
        catch (e) {
            console.log(e);
        }
        this.mobile_no = profileValue.mobile_no;
        if ((this.profile_category_id == null || this.profile_category_id == '') &&
            (this.dept_id == null || this.dept_id == '') &&
            (this.profile_id == null || this.profile_id == '') &&
            (this.mobile_no == null || this.mobile_no == 0)) {
            this.snackBar.openSnackBarWarn("Choose the one input field", "");
        }
        else if ((this.profile_category_id != null || this.profile_category_id != '') &&
            (this.dept_id != null || this.dept_id != '') &&
            (this.profile_id == null || this.profile_id == '') &&
            (this.mobile_no == null || this.mobile_no == 0)) {
            this.profile_Service(profileValue);
        }
        else if ((this.profile_category_id != null || this.profile_category_id != '') &&
            (this.dept_id == null || this.dept_id == '') &&
            (this.profile_id == null || this.profile_id == '') &&
            (this.mobile_no == null || this.mobile_no == 0)) {
            this.profile_Service(profileValue);
        }
        else if ((this.profile_category_id == null || this.profile_category_id == '') &&
            (this.dept_id == null || this.dept_id == '') &&
            (this.profile_id != null || this.profile_id != '') &&
            (this.mobile_no == null || this.mobile_no == 0)) {
            this.profile_Service(profileValue);
        }
        else if ((this.profile_category_id == null || this.profile_category_id == '') &&
            (this.dept_id == null || this.dept_id == '') &&
            (this.profile_id == null || this.profile_id == '') &&
            (this.mobile_no != null || this.mobile_no != 0)) {
            this.profile_Service(profileValue);
        }
        else {
            this.snackBar.openSnackBarWarn("Choosing multiple input field is not allow", "");
        }
    }
    profile_Service(profileValue) {
        localStorage.setItem('profileData', JSON.stringify(profileValue));
        ProfileComponent_1.refresh_data = profileValue;
        this.spinner.show();
        this.profileService.getProfiles(profileValue).subscribe((data) => {
            this.mat_DataSource.data = data;
            // this.profileForm.reset();
            this.department_Type = null;
            this.spinner.hide();
            localStorage.setItem('page', '');
        });
    }
    deleteProfile(profile_id, first_name, last_name, profile_category_id) {
        const dialogRef = this.dialog.open(_delete_delete_component__WEBPACK_IMPORTED_MODULE_7__["DeleteComponent"], {
            width: _globalconstants__WEBPACK_IMPORTED_MODULE_8__["Globalconstants"].width_delete,
            height: _globalconstants__WEBPACK_IMPORTED_MODULE_8__["Globalconstants"].height_delete,
            data: {
                profile_id: profile_id,
                first_name: first_name,
                last_name: last_name,
                profile_category_id: profile_category_id,
                component: _globalconstants__WEBPACK_IMPORTED_MODULE_8__["Globalconstants"].profile
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            //console.log(result);
            this.profile_Service(ProfileComponent_1.refresh_data);
        });
    }
    editProfile(profile_elements) {
        this.router.navigate(['/home/createaccount'], {
            queryParams: {
                profile: JSON.stringify(profile_elements),
                component: _globalconstants__WEBPACK_IMPORTED_MODULE_8__["Globalconstants"].edit_profile
            }
        });
    }
    createProfile() {
        this.router.navigate(['/home/createaccount'], {
            queryParams: {
                profile: '',
                component: _globalconstants__WEBPACK_IMPORTED_MODULE_8__["Globalconstants"].create_profile
            }
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_profileService__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
    { type: _service_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: false })
], ProfileComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: false })
], ProfileComponent.prototype, "sort", void 0);
ProfileComponent = ProfileComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-porfile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/programs/programs.component.css":
/*!*************************************************!*\
  !*** ./src/app/programs/programs.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\r\n    color: #000;\r\n}\r\n\r\n​:host ::ng-deep .mat-focused .mat-form-field-underline .mat-form-field-ripple {\r\n    background: #000;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\r\n    color: #000;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n:host ::ng-deep.mat-form-field-underline {\r\n    background-color: #000 !important;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field-label {\r\n    color: #000;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field-ripple {\r\n    background-color: #1976d2 !important;\r\n}\r\n\r\nmat-label {\r\n    color: #000;\r\n}\r\n\r\nspan {\r\n    color: red;\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n    border-left: none !important;\r\n}\r\n\r\n.ng-valid[required],\r\n.ng-valid.required {\r\n    border-left: none !important;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.red {\r\n    background: #B22222;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.warning {\r\n    background: #DAA520;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.green {\r\n    background: #228B22;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n.formCSS {\r\n    padding-left: 3%;\r\n    padding-right: 3%;\r\n    width: 50%;\r\n}\r\n\r\n.fullButtonCSS {\r\n    margin-top: 2%;\r\n    width: 100%;\r\n}\r\n\r\n.buttonDiv {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.space {\r\n    margin: 1%;\r\n}\r\n\r\n.imgBorder {\r\n    border-radius: 50%;\r\n    height: 10em;\r\n    width: 10em;\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    border: 0.1px #5867bb solid;\r\n    cursor: pointer;\r\n}\r\n\r\n.image-upload>input {\r\n    display: none;\r\n}\r\n\r\n.uploading {\r\n    height: 3em;\r\n    width: 3em;\r\n    position: absolute;\r\n    top: 6.5em;\r\n    left: 3.5em;\r\n    cursor: pointer;\r\n}\r\n\r\n.profileImageDiv {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    margin-left: 38%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbXMvcHJvZ3JhbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBOztJQUVJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW1zL3Byb2dyYW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxu4oCLOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ubmctaW52YWxpZDpub3QoZm9ybSkge1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5nLXZhbGlkW3JlcXVpcmVkXSxcclxuLm5nLXZhbGlkLnJlcXVpcmVkIHtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNuYWNrLWJhci1jb250YWluZXIucmVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNCMjIyMjI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDE3cHggODBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lci53YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQ6ICNEQUE1MjA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDE3cHggODBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lci5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjI4QjIyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDgwcHg7XHJcbn1cclxuXHJcbi5mb3JtQ1NTIHtcclxuICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5mdWxsQnV0dG9uQ1NTIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b25EaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNwYWNlIHtcclxuICAgIG1hcmdpbjogMSU7XHJcbn1cclxuXHJcbi5pbWdCb3JkZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMGVtO1xyXG4gICAgd2lkdGg6IDEwZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm9yZGVyOiAwLjFweCAjNTg2N2JiIHNvbGlkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW1hZ2UtdXBsb2FkPmlucHV0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi51cGxvYWRpbmcge1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICB3aWR0aDogM2VtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2LjVlbTtcclxuICAgIGxlZnQ6IDMuNWVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJvZmlsZUltYWdlRGl2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMzglO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/programs/programs.component.ts":
/*!************************************************!*\
  !*** ./src/app/programs/programs.component.ts ***!
  \************************************************/
/*! exports provided: ProgramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsComponent", function() { return ProgramsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../delete/delete.component */ "./src/app/delete/delete.component.ts");
/* harmony import */ var _globalconstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../globalconstants */ "./src/app/globalconstants.ts");
/* harmony import */ var _service_profileService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/profileService */ "./src/app/service/profileService.ts");
/* harmony import */ var _service_snackbar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/snackbar.service */ "./src/app/service/snackbar.service.ts");
/* harmony import */ var _service_tabServices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../service/tabServices */ "./src/app/service/tabServices.ts");













let ProgramsComponent = class ProgramsComponent {
    constructor(snackBar, spinner, profileService, tabSerives, dialog, router, formBuilder) {
        this.snackBar = snackBar;
        this.spinner = spinner;
        this.profileService = profileService;
        this.tabSerives = tabSerives;
        this.dialog = dialog;
        this.router = router;
        this.formBuilder = formBuilder;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
        this.edit = false;
        this.showedit = false;
        this.imageDetails = false;
        this.gridDiv = false;
    }
    ngOnInit() {
        this.adminValid();
        this.formValidation();
        this.getSchoolPrograms();
    }
    adminValid() {
        this.gridDiv = true;
        if (localStorage.getItem('profileCategory') === '1') {
            this.showedit = true;
        }
    }
    editProgram(programs, page) {
        // this.getSchoolPrograms();
        this.edit = true;
        this.imageDetails = false;
        this.gridDiv = false;
        this.showedit = false;
        if (page === 'edit') {
            this.programsForm.patchValue(programs);
            this.buttonValue = 'Update';
        }
        else {
            this.programsForm.reset();
            this.buttonValue = 'Add';
        }
    }
    deletePrograms(programs) {
        const dialogRef = this.dialog.open(_delete_delete_component__WEBPACK_IMPORTED_MODULE_8__["DeleteComponent"], {
            width: _globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].width_delete,
            height: _globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].height_delete,
            data: {
                programs_id: programs.id,
                component: _globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].delete_programs
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            //console.log(result);
            this.router.navigateByUrl('/home/programs');
            this.getSchoolPrograms();
        });
    }
    cancel() {
        this.edit = false;
        this.adminValid();
        this.imageDetails = false;
        this.gridDiv = true;
    }
    formValidation() {
        this.programsForm = this.formBuilder.group({
            id: [''],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ;
    setDefaultPic(event) {
        event.target.src = _globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].defaultFilePath;
    }
    preview(files) {
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.snackBar.openSnackBarWarn(_globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].fileType, '');
            return;
        }
        if (files[0].size > _globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].imagesize) {
            this.snackBar.openSnackBarWarn(_globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].errorFileSize, '');
            return false;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
            //this.registerForm.get('profileImage').setValue(files);
            this.selectedFiles = files;
        };
    }
    getSchoolPrograms() {
        this.tabSerives.getSchoolPrograms().subscribe((data) => {
            this.programData = data;
            this.title = data.title;
            this.description = data.description;
            this.news = data.news;
            this.imgURL = data.home_image_url;
            this.programsForm.patchValue(data);
            this.spinner.hide();
        });
    }
    programsDetail(programs) {
        this.programTitle = programs.title;
        this.programDescription = programs.description;
        this.edit = false;
        this.showedit = false;
        this.imageDetails = true;
        this.gridDiv = false;
    }
    close() {
        this.imageDetails = false;
        this.edit = false;
        this.adminValid();
        // this.pageRefresh();
    }
    pageRefresh() {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigateByUrl('/home/programs');
    }
    onSubmit(formDirective) {
        this.spinner.show();
        this.tabSerives.updateSchoolPrograms(this.programsForm.value).subscribe((data) => {
            if (data.id != null) {
                this.spinner.hide();
                formDirective.resetForm();
                this.programsForm.reset();
                this.imageDetails = false;
                this.edit = false;
                this.gridDiv = true;
                this.adminValid();
                this.getSchoolPrograms();
                this.upload(_globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].schoolProgramsFolder + data.id);
                this.router.navigateByUrl('/home/programs');
            }
            else {
                this.snackBar.openSnackBarError("Failure in updating data", "");
                this.spinner.hide();
            }
        }),
            error => {
                console.log(error);
                this.snackBar.openSnackBarError("Unable to process the webservice", "");
                this.spinner.hide();
            },
            () => { };
    }
    upload(id) {
        // if ((this.selectedFiles.item(0).size / 1024 / 1024 < 10) && (this.selectedFiles.item(0).type == 'application/vnd.ms-excel' || this.selectedFiles.item(0).type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || this.selectedFiles.item(0).type == 'application/octet-stream' || this.selectedFiles.item(0).type == 'application/vnd.oasis.opendocument.spreadsheet' || this.selectedFiles.item(0).type == "")) {
        if ((this.selectedFiles.item(0).size / 1024 / 1024 < 10)) {
            this.spinner.show();
            this.currentFileUpload = this.selectedFiles.item(0);
            this.subscription.add(this.profileService.pushFileToStorage(this.currentFileUpload, id, _globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].schoolProgramsFolder)
                .subscribe(event => {
                this.spinner.hide();
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                    this.imgURL = _globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].defaultFilePath;
                }
            }, error => {
                this.spinner.hide();
                this.snackBar.openSnackBarError(_globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].errorMessage, "");
            }));
        }
        else {
            this.snackBar.openSnackBarWarn(_globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].errorMessage, '');
        }
    }
};
ProgramsComponent.ctorParameters = () => [
    { type: _service_snackbar_service__WEBPACK_IMPORTED_MODULE_11__["SnackbarService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: _service_profileService__WEBPACK_IMPORTED_MODULE_10__["ProfileService"] },
    { type: _service_tabServices__WEBPACK_IMPORTED_MODULE_12__["TabServices"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
ProgramsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-programs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./programs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/programs/programs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./programs.component.css */ "./src/app/programs/programs.component.css")).default]
    })
], ProgramsComponent);



/***/ }),

/***/ "./src/app/reachus/reachus.component.css":
/*!***********************************************!*\
  !*** ./src/app/reachus/reachus.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bold {\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhY2h1cy9yZWFjaHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9yZWFjaHVzL3JlYWNodXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/reachus/reachus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reachus/reachus.component.ts ***!
  \**********************************************/
/*! exports provided: ReachusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReachusComponent", function() { return ReachusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReachusComponent = class ReachusComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReachusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reachus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reachus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reachus/reachus.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reachus.component.css */ "./src/app/reachus/reachus.component.css")).default]
    })
], ReachusComponent);



/***/ }),

/***/ "./src/app/school-home/school-home.component.css":
/*!*******************************************************!*\
  !*** ./src/app/school-home/school-home.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\r\n    color: #000;\r\n}\r\n\r\n​:host ::ng-deep .mat-focused .mat-form-field-underline .mat-form-field-ripple {\r\n    background: #000;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\r\n    color: #000;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n:host ::ng-deep.mat-form-field-underline {\r\n    background-color: #000 !important;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field-label {\r\n    color: #000;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field-ripple {\r\n    background-color: #1976d2 !important;\r\n}\r\n\r\nmat-label {\r\n    color: #000;\r\n}\r\n\r\nspan {\r\n    color: red;\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n    border-left: none !important;\r\n}\r\n\r\n.ng-valid[required],\r\n.ng-valid.required {\r\n    border-left: none !important;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.red {\r\n    background: #B22222;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.warning {\r\n    background: #DAA520;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.green {\r\n    background: #228B22;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n.formCSS {\r\n    padding-left: 3%;\r\n    padding-right: 3%;\r\n    width: 50%;\r\n}\r\n\r\n.fullButtonCSS {\r\n    margin-top: 2%;\r\n    width: 100%;\r\n}\r\n\r\n.buttonDiv {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.space {\r\n    margin: 1%;\r\n}\r\n\r\n.imgBorder {\r\n    border-radius: 50%;\r\n    height: 10em;\r\n    width: 10em;\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    border: 0.1px #5867bb solid;\r\n    cursor: pointer;\r\n}\r\n\r\n.image-upload>input {\r\n    display: none;\r\n}\r\n\r\n.uploading {\r\n    height: 3em;\r\n    width: 3em;\r\n    position: absolute;\r\n    top: 6.5em;\r\n    left: 3.5em;\r\n    cursor: pointer;\r\n}\r\n\r\n.profileImageDiv {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    margin-left: 38%;\r\n}\r\n\r\n.homeParentDiv {\r\n    position: absolute;\r\n}\r\n\r\neditHome {\r\n    float: right;\r\n    margin-left: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nob29sLWhvbWUvc2Nob29sLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBOztJQUVJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zY2hvb2wtaG9tZS9zY2hvb2wtaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbuKAizpob3N0IDo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtbGFiZWwge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZy12YWxpZFtyZXF1aXJlZF0sXHJcbi5uZy12YWxpZC5yZXF1aXJlZCB7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyLnJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQjIyMjIyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDgwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNuYWNrLWJhci1jb250YWluZXIud2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjREFBNTIwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDgwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNuYWNrLWJhci1jb250YWluZXIuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzIyOEIyMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMTdweCA4MHB4O1xyXG59XHJcblxyXG4uZm9ybUNTUyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMyU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uZnVsbEJ1dHRvbkNTUyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uRGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zcGFjZSB7XHJcbiAgICBtYXJnaW46IDElO1xyXG59XHJcblxyXG4uaW1nQm9yZGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMTBlbTtcclxuICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvcmRlcjogMC4xcHggIzU4NjdiYiBzb2xpZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmltYWdlLXVwbG9hZD5pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udXBsb2FkaW5nIHtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgd2lkdGg6IDNlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNi41ZW07XHJcbiAgICBsZWZ0OiAzLjVlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGVJbWFnZURpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM4JTtcclxufVxyXG5cclxuLmhvbWVQYXJlbnREaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5lZGl0SG9tZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/school-home/school-home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/school-home/school-home.component.ts ***!
  \******************************************************/
/*! exports provided: SchoolHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolHomeComponent", function() { return SchoolHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _globalconstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../globalconstants */ "./src/app/globalconstants.ts");
/* harmony import */ var _service_profileService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/profileService */ "./src/app/service/profileService.ts");
/* harmony import */ var _service_snackbar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/snackbar.service */ "./src/app/service/snackbar.service.ts");
/* harmony import */ var _service_tabServices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/tabServices */ "./src/app/service/tabServices.ts");











let SchoolHomeComponent = class SchoolHomeComponent {
    constructor(snackBar, spinner, profileService, tabSerives, router, formBuilder) {
        this.snackBar = snackBar;
        this.spinner = spinner;
        this.profileService = profileService;
        this.tabSerives = tabSerives;
        this.router = router;
        this.formBuilder = formBuilder;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.edit = false;
        this.showedit = false;
    }
    ngOnInit() {
        if (localStorage.getItem('profileCategory') === '1') {
            this.showedit = true;
        }
        this.formValidation();
        this.getSchoolProfile();
    }
    editHome() {
        this.getSchoolProfile();
        this.edit = true;
    }
    cancel() {
        this.edit = false;
    }
    formValidation() {
        this.homeForm = this.formBuilder.group({
            id: [''],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            news: ['', '']
        });
    }
    ;
    setDefaultPic(event) {
        event.target.src = _globalconstants__WEBPACK_IMPORTED_MODULE_7__["Globalconstants"].defaultFilePath;
    }
    preview(files) {
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.snackBar.openSnackBarWarn(_globalconstants__WEBPACK_IMPORTED_MODULE_7__["Globalconstants"].fileType, '');
            return;
        }
        if (files[0].size > _globalconstants__WEBPACK_IMPORTED_MODULE_7__["Globalconstants"].imagesize) {
            this.snackBar.openSnackBarWarn(_globalconstants__WEBPACK_IMPORTED_MODULE_7__["Globalconstants"].errorFileSize, '');
            return false;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
            //this.registerForm.get('profileImage').setValue(files);
            this.selectedFiles = files;
        };
    }
    getSchoolProfile() {
        this.tabSerives.getSchoolProfile().subscribe((data) => {
            this.title = data.title;
            this.description = data.description;
            this.news = data.news;
            this.imgURL = data.home_image_url;
            this.homeForm.patchValue(data);
            this.spinner.hide();
        });
    }
    onSubmit(formDirective) {
        this.spinner.show();
        this.tabSerives.updateSchoolProfile(this.homeForm.value).subscribe((data) => {
            if (data.id != null) {
                this.spinner.hide();
                formDirective.resetForm();
                this.homeForm.reset();
                this.edit = false;
                this.getSchoolProfile();
                // this.upload("SchoolProfile" + data.id);
                this.upload(_globalconstants__WEBPACK_IMPORTED_MODULE_7__["Globalconstants"].schoolProfileFolder);
                this.router.navigateByUrl('/home/schoolHome');
            }
            else {
                this.snackBar.openSnackBarError("Failure in updating data", "");
                this.spinner.hide();
            }
        }),
            error => {
                console.log(error);
                this.snackBar.openSnackBarError("Unable to process the webservice", "");
                this.spinner.hide();
            },
            () => { };
    }
    upload(id) {
        // if ((this.selectedFiles.item(0).size / 1024 / 1024 < 10) && (this.selectedFiles.item(0).type == 'application/vnd.ms-excel' || this.selectedFiles.item(0).type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || this.selectedFiles.item(0).type == 'application/octet-stream' || this.selectedFiles.item(0).type == 'application/vnd.oasis.opendocument.spreadsheet' || this.selectedFiles.item(0).type == "")) {
        if ((this.selectedFiles.item(0).size / 1024 / 1024 < 10)) {
            this.spinner.show();
            // this.progress.percentage = 0;
            this.currentFileUpload = this.selectedFiles.item(0);
            this.subscription.add(this.profileService.pushFileToStorage(this.currentFileUpload, id, _globalconstants__WEBPACK_IMPORTED_MODULE_7__["Globalconstants"].schoolProfileFolder)
                .subscribe(event => {
                this.spinner.hide();
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                    // this.progress.percentage = Math.round(100 * event.loaded / event.total);
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                    this.imgURL = _globalconstants__WEBPACK_IMPORTED_MODULE_7__["Globalconstants"].defaultFilePath;
                }
                // this.selectedFiles = undefined;
            }, error => {
                this.spinner.hide();
                this.snackBar.openSnackBarError(_globalconstants__WEBPACK_IMPORTED_MODULE_7__["Globalconstants"].errorMessage, "");
            }));
        }
        else {
            this.snackBar.openSnackBarWarn(_globalconstants__WEBPACK_IMPORTED_MODULE_7__["Globalconstants"].errorMessage, '');
        }
    }
};
SchoolHomeComponent.ctorParameters = () => [
    { type: _service_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["SnackbarService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
    { type: _service_profileService__WEBPACK_IMPORTED_MODULE_8__["ProfileService"] },
    { type: _service_tabServices__WEBPACK_IMPORTED_MODULE_10__["TabServices"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
SchoolHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-school-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./school-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/school-home/school-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./school-home.component.css */ "./src/app/school-home/school-home.component.css")).default]
    })
], SchoolHomeComponent);



/***/ }),

/***/ "./src/app/service/busRoute.ts":
/*!*************************************!*\
  !*** ./src/app/service/busRoute.ts ***!
  \*************************************/
/*! exports provided: BusRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusRoute", function() { return BusRoute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _globalconstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globalconstants */ "./src/app/globalconstants.ts");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    })
};
let BusRoute = class BusRoute {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    vehicle() {
        return this.httpClient.get(`${_globalconstants__WEBPACK_IMPORTED_MODULE_3__["Globalconstants"].vehicleUrl}route`);
    }
    mapRefresh(id) {
        return this.httpClient.get(`${_globalconstants__WEBPACK_IMPORTED_MODULE_3__["Globalconstants"].vehicleUrl}maprefresh/${id}`);
    }
};
BusRoute.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BusRoute = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BusRoute);



/***/ }),

/***/ "./src/app/service/commonServices.ts":
/*!*******************************************!*\
  !*** ./src/app/service/commonServices.ts ***!
  \*******************************************/
/*! exports provided: CommonServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonServices", function() { return CommonServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    })
};
let CommonServices = class CommonServices {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    deleteProfile(profile_Id, profile_category_id) {
        return this.httpClient.delete('/school/deleteProfile/' + profile_Id + '/' + profile_category_id);
    }
    deletePrograms(program_Id) {
        return this.httpClient.delete('/schooltabs/deletePrograms/' + program_Id);
    }
    deleteStudentDevelopments(program_Id) {
        return this.httpClient.delete('/schooltabs/deleteStudentDevelopments/' + program_Id);
    }
};
CommonServices.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommonServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommonServices);



/***/ }),

/***/ "./src/app/service/profileService.ts":
/*!*******************************************!*\
  !*** ./src/app/service/profileService.ts ***!
  \*******************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    })
};
let ProfileService = class ProfileService {
    // public baseUrl = "https://localhost:5000/school";
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = "https://schoolmenu.azurewebsites.net/schoolmenu";
    }
    getProfileType() {
        return this.httpClient.get(this.baseUrl + '/profile_category/');
    }
    getDepartments(admin_id) {
        return this.httpClient.get(this.baseUrl + '/departments/' + admin_id);
    }
    getProfiles(profile_values) {
        return this.httpClient.post(this.baseUrl + '/profiles/', profile_values, httpOptions);
    }
    getLogin(loginCredential) {
        // return this.httpClient.get(`http://localhost:8080/login/`);
        return this.httpClient.post(this.baseUrl + '/login/', loginCredential, httpOptions);
    }
    getRegister(userDetails) {
        return this.httpClient.post(this.baseUrl + '/register/', userDetails, httpOptions);
    }
    mobileExist(mobile_no) {
        return this.httpClient.get(this.baseUrl + '/mobile/' + mobile_no);
    }
    emailExist(email_id) {
        return this.httpClient.get(this.baseUrl + '/email/' + email_id);
    }
    pushFileToStorage(file, profile_id, profileFolder) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('X-Content-Type-Options', 'nosniff');
        const data = new FormData();
        data.append('file', file);
        data.append('profile_Id', profile_id);
        data.append('profile_Folder', profileFolder);
        const newRequest = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.baseUrl + '/uploadImages/', data, {
            headers: headers,
            reportProgress: true
        });
        return this.httpClient.request(newRequest);
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProfileService);



/***/ }),

/***/ "./src/app/service/snackbar.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/snackbar.service.ts ***!
  \*********************************************/
/*! exports provided: SnackbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarService", function() { return SnackbarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _globalconstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globalconstants */ "./src/app/globalconstants.ts");




let SnackbarService = class SnackbarService {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
    }
    openSnackBarSuccess(message, action) {
        this._snackBar.open(message, action, {
            duration: _globalconstants__WEBPACK_IMPORTED_MODULE_3__["Globalconstants"].snackBarTimeout,
            verticalPosition: 'top',
            panelClass: ['green']
        });
    }
    openSnackBarWarn(message, action) {
        this._snackBar.open(message, action, {
            duration: _globalconstants__WEBPACK_IMPORTED_MODULE_3__["Globalconstants"].snackBarTimeout,
            verticalPosition: 'top',
            panelClass: ['warning-snackbar']
        });
    }
    openSnackBarError(messages, action) {
        this._snackBar.open(messages, action, {
            duration: _globalconstants__WEBPACK_IMPORTED_MODULE_3__["Globalconstants"].snackBarTimeout,
            verticalPosition: 'top',
            panelClass: ['red']
        });
    }
};
SnackbarService.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
SnackbarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SnackbarService);



/***/ }),

/***/ "./src/app/service/tabServices.ts":
/*!****************************************!*\
  !*** ./src/app/service/tabServices.ts ***!
  \****************************************/
/*! exports provided: TabServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabServices", function() { return TabServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    })
};
let TabServices = class TabServices {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // public baseUrl = environment.production;
        this.baseUrl = "https://schoolweb.azurewebsites.net";
    }
    getSchoolProfile() {
        return this.httpClient.get(this.baseUrl + '/schooltabs/getSchoolProfile/');
    }
    updateSchoolProfile(userDetails) {
        return this.httpClient.post(this.baseUrl + '/schooltabs/schoolProfile/', userDetails, httpOptions);
    }
    getAboutProfile() {
        return this.httpClient.get(this.baseUrl + '/schooltabs/getSchoolAbout/');
    }
    updateAboutProfile(userDetails) {
        return this.httpClient.post(this.baseUrl + '/schooltabs/schoolAbout/', userDetails, httpOptions);
    }
    getSchoolPrograms() {
        return this.httpClient.get(this.baseUrl + '/schooltabs/getPrograms/');
    }
    updateSchoolPrograms(userDetails) {
        return this.httpClient.post(this.baseUrl + '/schooltabs/updatePrograms/', userDetails, httpOptions);
    }
    getSchoolStudentDevelopment() {
        return this.httpClient.get(this.baseUrl + '/schooltabs/getStudentDevelopment/');
    }
    updateSchoolStudentDevelopment(userDetails) {
        return this.httpClient.post(this.baseUrl + '/schooltabs/updateStudentDevelopment/', userDetails, httpOptions);
    }
    getSchoolAdmissionHeader() {
        return this.httpClient.get(this.baseUrl + '/schooltabs/getAdmissionDetailsHeader/');
    }
    updateSchoolAdmissionHeader(userDetails) {
        return this.httpClient.post(this.baseUrl + '/schooltabs/updateAdmissionDetailsHeader/', userDetails, httpOptions);
    }
    getStudentDepartments() {
        return this.httpClient.get(this.baseUrl + '/schooltabs/getStudentDepartments/');
    }
    onlineRegistration(userDetails) {
        return this.httpClient.post(this.baseUrl + '/schooltabs/onlineRegistration/', userDetails, httpOptions);
    }
    mobileExist(mobile_no) {
        return this.httpClient.get(this.baseUrl + '/schooltabs/mobile/' + mobile_no);
    }
    emailExist(email_id) {
        return this.httpClient.get(this.baseUrl + '/schooltabs/email/' + email_id);
    }
    getStudentRegistrationStatus() {
        return this.httpClient.get(this.baseUrl + '/schooltabs/getStudentRegistrationStatus/');
    }
    getOnlineStudentRegistration() {
        return this.httpClient.get(this.baseUrl + '/schooltabs/getStudent_Online_Registrations/');
    }
};
TabServices.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TabServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TabServices);



/***/ }),

/***/ "./src/app/spinner/spinner.component.css":
/*!***********************************************!*\
  !*** ./src/app/spinner/spinner.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpinnerComponent = class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
};
SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spinner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinner.component.css */ "./src/app/spinner/spinner.component.css")).default]
    })
], SpinnerComponent);



/***/ }),

/***/ "./src/app/student-developments/student-developments.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/student-developments/student-developments.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\r\n    color: #000;\r\n}\r\n\r\n​:host ::ng-deep .mat-focused .mat-form-field-underline .mat-form-field-ripple {\r\n    background: #000;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\r\n    color: #000;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n:host ::ng-deep.mat-form-field-underline {\r\n    background-color: #000 !important;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field-label {\r\n    color: #000;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n:host ::ng-deep .mat-form-field-ripple {\r\n    background-color: #1976d2 !important;\r\n}\r\n\r\nmat-label {\r\n    color: #000;\r\n}\r\n\r\nspan {\r\n    color: red;\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n    border-left: none !important;\r\n}\r\n\r\n.ng-valid[required],\r\n.ng-valid.required {\r\n    border-left: none !important;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.red {\r\n    background: #B22222;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.warning {\r\n    background: #DAA520;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n::ng-deep .mat-snack-bar-container.green {\r\n    background: #228B22;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 17px 80px;\r\n}\r\n\r\n.formCSS {\r\n    padding-left: 3%;\r\n    padding-right: 3%;\r\n    width: 50%;\r\n}\r\n\r\n.fullButtonCSS {\r\n    margin-top: 2%;\r\n    width: 100%;\r\n}\r\n\r\n.buttonDiv {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.space {\r\n    margin: 1%;\r\n}\r\n\r\n.imgBorder {\r\n    border-radius: 50%;\r\n    height: 10em;\r\n    width: 10em;\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    border: 0.1px #5867bb solid;\r\n    cursor: pointer;\r\n}\r\n\r\n.image-upload>input {\r\n    display: none;\r\n}\r\n\r\n.uploading {\r\n    height: 3em;\r\n    width: 3em;\r\n    position: absolute;\r\n    top: 6.5em;\r\n    left: 3.5em;\r\n    cursor: pointer;\r\n}\r\n\r\n.profileImageDiv {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    margin-left: 38%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1kZXZlbG9wbWVudHMvc3R1ZGVudC1kZXZlbG9wbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBOztJQUVJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtZGV2ZWxvcG1lbnRzL3N0dWRlbnQtZGV2ZWxvcG1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxu4oCLOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ubmctaW52YWxpZDpub3QoZm9ybSkge1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5nLXZhbGlkW3JlcXVpcmVkXSxcclxuLm5nLXZhbGlkLnJlcXVpcmVkIHtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNuYWNrLWJhci1jb250YWluZXIucmVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNCMjIyMjI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDE3cHggODBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lci53YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQ6ICNEQUE1MjA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDE3cHggODBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lci5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjI4QjIyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDgwcHg7XHJcbn1cclxuXHJcbi5mb3JtQ1NTIHtcclxuICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5mdWxsQnV0dG9uQ1NTIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b25EaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNwYWNlIHtcclxuICAgIG1hcmdpbjogMSU7XHJcbn1cclxuXHJcbi5pbWdCb3JkZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMGVtO1xyXG4gICAgd2lkdGg6IDEwZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm9yZGVyOiAwLjFweCAjNTg2N2JiIHNvbGlkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW1hZ2UtdXBsb2FkPmlucHV0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi51cGxvYWRpbmcge1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICB3aWR0aDogM2VtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2LjVlbTtcclxuICAgIGxlZnQ6IDMuNWVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJvZmlsZUltYWdlRGl2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMzglO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/student-developments/student-developments.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/student-developments/student-developments.component.ts ***!
  \************************************************************************/
/*! exports provided: StudentDevelopmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDevelopmentsComponent", function() { return StudentDevelopmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../delete/delete.component */ "./src/app/delete/delete.component.ts");
/* harmony import */ var _globalconstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../globalconstants */ "./src/app/globalconstants.ts");
/* harmony import */ var _service_profileService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/profileService */ "./src/app/service/profileService.ts");
/* harmony import */ var _service_snackbar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/snackbar.service */ "./src/app/service/snackbar.service.ts");
/* harmony import */ var _service_tabServices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../service/tabServices */ "./src/app/service/tabServices.ts");













let StudentDevelopmentsComponent = class StudentDevelopmentsComponent {
    constructor(snackBar, spinner, profileService, tabSerives, dialog, router, formBuilder) {
        this.snackBar = snackBar;
        this.spinner = spinner;
        this.profileService = profileService;
        this.tabSerives = tabSerives;
        this.dialog = dialog;
        this.router = router;
        this.formBuilder = formBuilder;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
        this.edit = false;
        this.showedit = false;
        this.imageDetails = false;
        this.gridDiv = false;
    }
    ngOnInit() {
        this.adminValid();
        this.formValidation();
        this.getSchoolPrograms();
    }
    adminValid() {
        this.gridDiv = true;
        if (localStorage.getItem('profileCategory') === '1') {
            this.showedit = true;
        }
    }
    editStudentDevelopments(studentDevelopment, page) {
        // this.getSchoolPrograms();
        this.edit = true;
        this.imageDetails = false;
        this.gridDiv = false;
        this.showedit = false;
        console.log(studentDevelopment);
        this.imgURL = studentDevelopment.student_development_image_url;
        if (page === 'edit') {
            this.programsForm.patchValue(studentDevelopment);
            this.buttonValue = 'Update';
        }
        else {
            this.programsForm.reset();
            this.buttonValue = 'Add';
        }
    }
    deleteStudentDevelopments(studentDevelopments) {
        const dialogRef = this.dialog.open(_delete_delete_component__WEBPACK_IMPORTED_MODULE_8__["DeleteComponent"], {
            width: _globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].width_delete,
            height: _globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].height_delete,
            data: {
                programs_id: studentDevelopments.id,
                component: _globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].delete_student_developments
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            //console.log(result);
            this.router.navigateByUrl('/home/studev');
            this.getSchoolPrograms();
        });
    }
    cancel() {
        this.edit = false;
        this.adminValid();
        this.imageDetails = false;
        this.gridDiv = true;
    }
    formValidation() {
        this.programsForm = this.formBuilder.group({
            id: [''],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ;
    setDefaultPic(event) {
        event.target.src = _globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].defaultFilePath;
    }
    preview(files) {
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.snackBar.openSnackBarWarn(_globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].fileType, '');
            return;
        }
        if (files[0].size > _globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].imagesize) {
            this.snackBar.openSnackBarWarn(_globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].errorFileSize, '');
            return false;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
            //this.registerForm.get('profileImage').setValue(files);
            this.selectedFiles = files;
        };
    }
    getSchoolPrograms() {
        this.tabSerives.getSchoolStudentDevelopment().subscribe((data) => {
            this.programData = data;
            this.title = data.title;
            this.description = data.description;
            // this.news = data.news;
            this.imgURL = data.student_development_image_url;
            this.programsForm.patchValue(data);
            this.spinner.hide();
        });
    }
    studentDevelopmentsDetail(programs) {
        this.programTitle = programs.title;
        this.programDescription = programs.description;
        this.edit = false;
        this.showedit = false;
        this.imageDetails = true;
        this.gridDiv = false;
    }
    close() {
        this.imageDetails = false;
        // this.showedit = true;
        this.edit = false;
        // this.gridDiv = true;
        this.adminValid();
    }
    onSubmit(formDirective) {
        this.spinner.show();
        this.tabSerives.updateSchoolStudentDevelopment(this.programsForm.value).subscribe((data) => {
            if (data.id != null) {
                this.spinner.hide();
                formDirective.resetForm();
                this.programsForm.reset();
                this.imageDetails = false;
                this.edit = false;
                // this.gridDiv = true;
                this.adminValid();
                this.getSchoolPrograms();
                this.upload(_globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].schoolStudentDevelopmentFolder + data.id);
                this.router.navigateByUrl('/home/studev');
            }
            else {
                this.snackBar.openSnackBarError("Failure in updating data", "");
                this.spinner.hide();
            }
        }),
            error => {
                console.log(error);
                this.snackBar.openSnackBarError("Unable to process the webservice", "");
                this.spinner.hide();
            },
            () => { };
    }
    upload(id) {
        // if ((this.selectedFiles.item(0).size / 1024 / 1024 < 10) && (this.selectedFiles.item(0).type == 'application/vnd.ms-excel' || this.selectedFiles.item(0).type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || this.selectedFiles.item(0).type == 'application/octet-stream' || this.selectedFiles.item(0).type == 'application/vnd.oasis.opendocument.spreadsheet' || this.selectedFiles.item(0).type == "")) {
        if ((this.selectedFiles.item(0).size / 1024 / 1024 < 10)) {
            this.spinner.show();
            this.currentFileUpload = this.selectedFiles.item(0);
            this.subscription.add(this.profileService.pushFileToStorage(this.currentFileUpload, id, _globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].schoolStudentDevelopmentFolder)
                .subscribe(event => {
                this.spinner.hide();
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                    this.imgURL = _globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].defaultFilePath;
                }
            }, error => {
                this.spinner.hide();
                this.snackBar.openSnackBarError(_globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].errorMessage, "");
            }));
        }
        else {
            this.snackBar.openSnackBarWarn(_globalconstants__WEBPACK_IMPORTED_MODULE_9__["Globalconstants"].errorMessage, '');
        }
    }
};
StudentDevelopmentsComponent.ctorParameters = () => [
    { type: _service_snackbar_service__WEBPACK_IMPORTED_MODULE_11__["SnackbarService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: _service_profileService__WEBPACK_IMPORTED_MODULE_10__["ProfileService"] },
    { type: _service_tabServices__WEBPACK_IMPORTED_MODULE_12__["TabServices"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
StudentDevelopmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-student-developments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-developments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student-developments/student-developments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-developments.component.css */ "./src/app/student-developments/student-developments.component.css")).default]
    })
], StudentDevelopmentsComponent);



/***/ }),

/***/ "./src/app/timetable/timetable.component.css":
/*!***************************************************!*\
  !*** ./src/app/timetable/timetable.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWV0YWJsZS90aW1ldGFibGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/timetable/timetable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timetable/timetable.component.ts ***!
  \**************************************************/
/*! exports provided: TimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableComponent", function() { return TimetableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimetableComponent = class TimetableComponent {
    constructor() { }
    ngOnInit() {
    }
};
TimetableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timetable',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timetable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/timetable/timetable.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timetable.component.css */ "./src/app/timetable/timetable.component.css")).default]
    })
], TimetableComponent);



/***/ }),

/***/ "./src/app/update/update.component.css":
/*!*********************************************!*\
  !*** ./src/app/update/update.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".parentCSS {\r\n    margin-top: 3%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin-left: 2%;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.childCSS {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    cursor: pointer;\r\n    width: 32%;\r\n    margin-right: 2%;\r\n}\r\n\r\n.innerChildCSS {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGVBQWU7SUFDZix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC91cGRhdGUvdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyZW50Q1NTIHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNoaWxkQ1NTIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMzIlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxufVxyXG5cclxuLmlubmVyQ2hpbGRDU1Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/update/update.component.ts":
/*!********************************************!*\
  !*** ./src/app/update/update.component.ts ***!
  \********************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UpdateComponent = class UpdateComponent {
    constructor() { }
    ngOnInit() {
    }
};
UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update/update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update.component.css */ "./src/app/update/update.component.css")).default]
    })
], UpdateComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\workspace-angular\school\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map