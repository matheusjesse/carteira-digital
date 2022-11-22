import * as Sinon from 'sinon';
import chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/users';
import { userMock } from './mocks/userMock';
import JwtService from '../middlewares/JwtService';
import Transaction from '../database/models/transactions';
import { transactionMock } from './mocks/transactionMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Users', () => {
  describe("Transaction", () => {

    afterEach(() => {
      Sinon.restore();
    })

    it("Testa se ao chamar get /transaction com um token valido retorna status 200 e o body correto", async() => {
      Sinon.stub(User, "findOne").resolves(userMock as unknown as User);
      Sinon.stub(Transaction, "findAll").resolves(transactionMock as unknown as Transaction[])
      const { password, username } = userMock;
      Sinon.stub(JwtService, "decodeToken").returns({password, username});
      Sinon.stub(JwtService, "verify").returns({password, username});
      const response = await chai.request(app)
        .get('/transaction').send()
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.eq(transactionMock)
    })

    it("Testa se ao chamar get /transaction sem token retorna status 401 e o body com menssagem de erro", async() => {
      const response = await chai.request(app)
        .get('/transaction').send()
      expect(response.status).to.equal(401);
      expect(response.body).to.deep.eq({ message: 'Invalid token'})
    })
  })
});