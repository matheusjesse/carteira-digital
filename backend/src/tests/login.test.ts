import * as Sinon from 'sinon';
import chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import User from '../database/models/users';
import { userMock } from './mocks/userMock';
import { tokenMock } from './mocks/tokenMock';
import JwtService from '../middlewares/JwtService';

chai.use(chaiHttp);

const { expect } = chai;

describe('Users', () => {
  describe("Login", () => {

    beforeEach(() => {
      const { token } = tokenMock;      
      Sinon.stub(JwtService, "sign").returns(token);
    })

    afterEach(() => {
      Sinon.restore();
    })

    it("Testa se ao fazer login corretamente retorna status 200 e o token", async() => {
      Sinon.stub(User, "findOne").resolves(userMock as unknown as User);
      const { username } = userMock;
      const response = await chai.request(app)
        .post('/login').send({ username, password: '1234567A'})
      expect(response.status).to.equal(200);
    })

    it("Testa se ao tentar fazer login com inserindo só o username retorna erro", async() => {
      Sinon.stub(User, "findOne").resolves(userMock as unknown as User);
      const { username } = userMock;
      const response = await chai.request(app)
        .post('/login').send({username});
      expect(response.status).to.equal(400);
      expect(response.body).to.deep.eq({ "message": "Some required fields are missing" });
    })

    it("Testa se ao tentar fazer login com inserindo só o password retorna erro", async() => {
      Sinon.stub(User, "findOne").resolves(userMock as unknown as User);
      const { password } = userMock;
      const response = await chai.request(app)
        .post('/login').send({password});
      expect(response.status).to.equal(400);
      expect(response.body).to.deep.eq({ "message": "Some required fields are missing" });
    })

    it("Testa se ao tentar fazer login com um usuario não cadastrado retorna status 401 e messagem de erro", async() => {
      Sinon.stub(User, "findOne").resolves(null);
      const { username } = userMock;
      const response = await chai.request(app)
        .post('/login').send({ username, password: '1234567A'});
        expect(response.status).to.equal(401);
      expect(response.body).to.deep.eq({ "message": "Unregistered user" });
    })
  })
});