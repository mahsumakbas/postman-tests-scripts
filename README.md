# Postman'de Test ve Pre/Post scriptleri Yazmak

## Post-Response Scriptleri


Postman, API testleri için oldukça popüler bir araçtır. Postman ile API istekleri gönderebilir, bu isteklere yanıt alabilir ve bu yanıtları test edebilirsiniz. Postman, testlerinizi yazmak için JavaScript tabanlı bir ortam kullanır.
Bu yazıda, Postman'de testlerin nasıl yazılacağını, pre-request ve post-response scriptlerinin nasıl kullanılacağını ve `Chai` kütüphanesinin sunduğu assertion fonksiyonlarını inceleyeceğiz.

## Postman'de Test Yazmak(Post-Response Scriptleri)

Postman, Testlerde Response Assertion (karşılaştırma) işlemleri için Javascript'in Chai kütüphanesini kullanıyor.

Bu kütüphanenin sunduğu özellikler haricinde, Postman'in eklediği bazı extra fonksiyonlar da vardır. Onları da inceleyeceğiz.

## Postman'de Scriptlerin Yazılması - Expect() Stili

Postman, gerek Pre-Request(Request göndermeden önce), gerekse de Post-Response(Cevap döndükten sonra) tarafında, tüm işlemleri "`pm`" global objesi üzerinde gerçekleştiyor.

`pm` objesinde, request verisi "`pm.request`", response verisi ise "`pm.response`" içinde tutulur. Bu yazıda, response üzerinde assertion anlatacağımız için "pm.response" üzerinden ilerleyeceğiz.

Önce bir test case fonksiyonu hazırlayalım. bunun için pm.test objesi kullanıyoruz:

```javascript
    pm.test("Test case adı", function () {
        //buraya assertion ve ilgili işlemler gelecek
        //çocklu assert eklenebilir
    });
```

pm.test fonksiyonu, test case'lerimizi tanımlamak için kullanılır. İlk parametre test case'in adıdır, ikinci parametre ise bir callback fonksiyonudur. Bu callback fonksiyonu içinde assertion işlemlerimizi gerçekleştireceğiz.
Assert için, Chai kütüphanesinin "expect" fonksiyonu kullanıyoruz.

`pm.expect(assert_edilecek_response_degeri).assert_fonksiyonlari`

örnek:

`pm.expect(pm.response).to.have.status(200);`

burada, response'un status değerini kontrol ettik. test fonksiyonumuzun nihai hali:

```javascript
    pm.test("Test Status code is 200", function () {
    pm.expect(pm.response).to.have.status(200);

    });
```

şeklinde olacak.

Detaylara geçmeden önce, "response" objemizi anlamak lazım. Postman'de, response objesi aşağıdaki şekidledir:

```json
    { 
        id: "< UUID formatında bir string >"
        status: "status(string)"
        code: < number_status_code >
        header: < headers >
        stream: {< response_body_text >}
        cookie: < cookies
        responseTime: < response süresi: milisaniye cinsinden >
        responseSize: < response data büyüklüğü: byte cinsinden >
    }
```

**Örnek:**

```json
    {
        id: "16da4ba3-cfb0-4231-b6fc-40afadeb70c0"
        status: "OK"
        code: 200
        header: [17]
        stream: {…}
        cookie: [0]
        responseTime: 160
        responseSize: 759
    }
```

**NOT:** *şunu unutmayın, burada postman response objesi, sadece istekten geri dönen cevap demek değildir. O cevabın içeriği olmak üzere, birkaç ekstra veri tutan bir Postman objesidir.*

İstekden dönen response body/text işlemleri aşağıdaki örneklerde gösterilecektir.

Şimdi, response text üzerinde bir assert işlemi yapalım. Örneğin, gelen response text'in bir JSON olduğunu düşünelim, ve o JSON içinde "`value`" isimli bir string property olsun, onu kontrol edeceğiz.

Bunun için, pm.response objemizin text bilgisini alıp, onu json oalrak işleyeceğiz:

`var jsonData = pm.response.json();`

daha sonra, burada `JSON path(extractor)` kurallarını takip ederek, istediğimiz property'e ulaşabiliriz ve istediğimiz işlemi yapabiliriz.

`pm.expect(jsonData.value).to.eql("hello");`

Nihai hali:

```javascript
    pm.test("Check value property in body", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.value).to.eql("hello");  
    });

```


### pm.response stili

Postman'de, expect() fonksiyonu dışında, doğrudan pm.response objesi üzerinde de assertion işlemleri yapabiliriz. Bu, daha okunabilir ve anlaşılır bir kod yazmamızı sağlar.

```javascript
    pm.test("Check response status code", function () {
        pm.response.to.have.status(200);
    });
```
Bu format, daha okunaklı kod yazarak aynı işlemi yapmamızı sağlar. Ancak, Chai kütüphanesinin sunduğu tüm assertion fonksiyonlarını kullanamayabiliriz. Bu nedenle, daha karmaşık ve esnek assertion işlemleri için `pm.expect()` stilini kullanmak daha uygun olabilir.
