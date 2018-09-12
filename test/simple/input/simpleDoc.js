/**
 * @api {post} /api/admin/Login 登录
 * @apiGroup Admin
 * @apiParam {String} Name 账号
 * @apiParam {String} Pass 密码
 * @apiSuccess {Number} Status 状态码
 * @apiSuccess {String} Message 消息
 * @apiSuccess {Object} Data 略
 * @apiSuccess {Number} Data.ID 账号ID
 * @apiSuccess {String} Data.Nickname 昵称
 * @apiSuccess {Object} Data.Role 角色信息
 * @apiSuccess {String} Data.Role.Name 名称
 * @apiSuccess {String} Data.Role.Aliase 别名
 */