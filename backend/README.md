
# Backend

Rodanto testes
```
    npm test
```

## Toda a requisição exceto a criação de usuário precisa de um Token Valido
### Request - Criar Usuário


`PUT /login` 

`http://localhost:8000/login`

<details>
<summary> Request Body</summary>
- Esperado username maior que 3 letras
- Esperado password de 8 digitos contendo pelo menos 1 letra maiúscula e 1 numero

<pre>

```
 {
  "username": "maria",
  "password": "3213221A"
 }

```
    
</pre>
</details>

<details>
<summary> Response </summary>

<pre>

    Status: 201 OK
```    
 {
  "message": "success"
 } 
```
</pre>
</details>

---


### Request - Login

`POST /login` 

`http://localhost:8000/login`

<details>
<summary> Request Body</summary>
<pre>

Precisa ser enviado um token valido no headers

```
 {
  "username": "maria",
  "password": "3213221A"
 }

```
    
</pre>
</details>

<details>
<summary> Response </summary>

<pre>

    Status: 200 OK
```    
    {
      "token": "responde com um token valido por 24h"
    }
```
</pre>
</details>

---

### Request - Balance

`GET /account` 

`http://localhost:8000/account`

<details>
<summary> Request Body</summary>
<pre>

```
   Precisa ser enviado um token valido no Headers

```
    
</pre>
</details>

<details>
<summary> Response </summary>

<pre>

    Status: 200 OK
```    
  {
     "username": "maria",
     "account": {
        "balance": 78.44,
        "id": 2
     }
   }
```
</pre>
</details>

---

### Request - Cash Out

`PATCH /account/cashout`

`http:localhost:8000/account/cashout`

<details>
<summary> Request Body</summary>
<pre>

```
  {
    "favorecedor": "maria",
    "beneficiado": "marcos",
    "value": 3.56
  }

```
    
</pre>
</details>

<details>
<summary> Response </summary>

<pre>

    Status: 200 OK
```    
    {
      "message": "success"
    }
```
</pre>
</details>

---

### Request - Transaction

`Get /transaction`

`http://localhost:8000/transaction`

<details>
<summary> Request Body</summary>
<pre>

```

   Deverá enviar um token valido no headers

```
    
</pre>
</details>

<details>
<summary> Response </summary>

<pre>
    
    por padrão retorna o mais recente primeiro

    Status: 200 OK
```    
    [
      {
        "value": 3.56,
        "id": 10,
        "debitedAccountId": 2,
        "creditedAccountId": 1,
        "createdAt": "2022-11-18T18:34:23.910Z"
      },
      {
        "value": 3.56,
        "id": 9,
        "debitedAccountId": 2,
        "creditedAccountId": 1,
        "createdAt": "2022-11-18T18:34:04.887Z"
      }
    ...
    ]
```
</pre>
</details>

---

### Request - filter transaction

`POST /transaction/filter`

`http://localhost:8000/transaction/filter`

<details>
<summary> Request URL</summary>
<pre>

```
  date: "recent" | "old" | null
  filter: "cashout | "cashin | null
    
```

#### - caso filtro por data 

 ```
	**** RETORNA POR DATA MAIS RECENTE ***

    http://localhost:8000/transaction/filter/index.html?date=recent&filter=null
    
	*** RETORNA POR DATA MAIS ANTIGA ***

    http://localhost:8000/transaction/filter/index.html?date=old&filter=null

 ```
 
 ### caso filtro por data && filter(cashin, cashout)
 
 ```
	RETORNA POR DATA MAIS RECENTE e cashin(dinheiro recebido)
    http://localhost:8000/transaction/filter/index.html?date=recent&filter=cashin
 ```
 
 #### caso filtro só por filter(cashin,cashout) [por padrão retorna o mais recente]

 ```
    http://localhost:8000/transaction/filter/index.html?date=null&filter=cashin

```
    
</pre>
</details>

<details>
<summary> Response </summary>

<pre>

    Status: 200 OK
```    
    O retorno será o mesmo de /transaction. porem de acordo com o filtro escolhido
```
</pre>
</details>


## Tecnologias usadas Backend
- Nodejs 
- Express
- TypeScript
- Sequelize (db: PostgreSQL)
- Biblioteca Joi 
- Biblioteca Jsonwebtoken
- bcryptjs
- Docker

