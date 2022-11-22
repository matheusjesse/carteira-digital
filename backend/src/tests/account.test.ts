import * as Sinon from 'sinon';
import chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/users';
import { userBalanceMock } from './mocks/accountMock';
import { userMock } from './mocks/userMock';
import JwtService from '../middlewares/JwtService';

chai.use(chaiHttp);

const { expect } = chai;

describe('Users', () => {
  describe("Account", () => {

    afterEach(() => {
      Sinon.restore();
    })

    it("Testa se ao chamar get /account com um token valido retorna status 200 e o body correto", async() => {
      Sinon.stub(User, "findOne").resolves(userBalanceMock as unknown as User);
      const { password, username } = userMock;
      Sinon.stub(JwtService, "decodeToken").returns({password, username});
      Sinon.stub(JwtService, "verify").returns({password, username});
      const response = await chai.request(app)
        .get('/account').send()
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.eq(userBalanceMock)
    })

    it("Testa se ao chamar get /account sem token retorna status 401 e o token", async() => {
      const response = await chai.request(app)
        .get('/account').send()
      expect(response.status).to.equal(401);
      expect(response.body).to.deep.eq({ message: "Invalid token" });
    })
  })
});