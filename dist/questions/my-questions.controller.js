"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyQuestionsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const create_question_dto_1 = require("./dto/create-question.dto");
const get_questions_dto_1 = require("./dto/get-questions.dto");
const update_question_dto_1 = require("./dto/update-question.dto");
const my_questions_service_1 = require("./my-questions.service");
let MyQuestionsController = class MyQuestionsController {
    constructor(myQuestionService) {
        this.myQuestionService = myQuestionService;
    }
    findAll(query) {
        return this.myQuestionService.findMyQuestions(query);
    }
    find(id) {
        return this.myQuestionService.findMyQuestion(+id);
    }
    create(createQuestionDto) {
        return this.myQuestionService.create(createQuestionDto);
    }
    update(id, updateQuestionDto) {
        return this.myQuestionService.update(+id, updateQuestionDto);
    }
    delete(id) {
        return this.myQuestionService.delete(+id);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_questions_dto_1.GetQuestionDto]),
    __metadata("design:returntype", void 0)
], MyQuestionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/question.entity").Question }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MyQuestionsController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/question.entity").Question }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_question_dto_1.CreateQuestionDto]),
    __metadata("design:returntype", void 0)
], MyQuestionsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/question.entity").Question }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_question_dto_1.UpdateQuestionDto]),
    __metadata("design:returntype", void 0)
], MyQuestionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/question.entity").Question }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MyQuestionsController.prototype, "delete", null);
MyQuestionsController = __decorate([
    (0, common_1.Controller)('my-questions'),
    __metadata("design:paramtypes", [my_questions_service_1.MyQuestionsService])
], MyQuestionsController);
exports.MyQuestionsController = MyQuestionsController;
//# sourceMappingURL=my-questions.controller.js.map