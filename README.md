# User Dictionary React App with ASP.NET Core
I have starting doing this application because this was a election project, but, as I finished a different version of this(No API + Razor) within 3 hours I felt like I could've done so much more.

Well I'm pretty sure this is nothing but I've enjoyed and learnt.


# Prerequisites
* SQL Server Database
* Node.js
* .NET 5

# Preview
* Empty List
![image](https://user-images.githubusercontent.com/14177182/121065433-6f0ac080-c7d1-11eb-879d-2c951ea440a2.png)
* New User
![image](https://user-images.githubusercontent.com/14177182/121065825-dcb6ec80-c7d1-11eb-8e2f-99a2c1acef48.png)
* Edit User (instantly taken after saved a new user)
![image](https://user-images.githubusercontent.com/14177182/121065924-f7896100-c7d1-11eb-86b7-3d93ec53c703.png)
* List
![image](https://user-images.githubusercontent.com/14177182/121066207-4afbaf00-c7d2-11eb-8e79-fb595bbc4085.png)


<details>
  <summary>Exported Insomnia Document</summary>
  <hr />
<code><pre>
  {"_type":"export","__export_format":4,"__export_date":"2021-06-07T17:38:20.703Z","__export_source":"insomnia.desktop.app:v2021.3.0","resources":[{"_id":"req_5af806f47dd04020a6d5e43bc197e506","parentId":"fld_5fb9bda8312e4cbe8942c052a55020fb","modified":1623068308827,"created":1623062508992,"url":"{{ _.APP_URL }}/api/User/update/28","name":"Update User","description":"","method":"PUT","body":{"mimeType":"application/json","text":"{\n  \"firstName\": \"bbbb\",\n  \"surname\": \"dsgsdg\",\n  \"birthDate\": \"0001-01-01T00:00:00\",\n  \"location\": \"w\",\n  \"contactInformations\": [\n    {\n      \"id\": 27,\n      \"type\": 0,\n      \"name\": \"testtttt\",\n      \"value\": \"val\"\n    }\n  ]\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json","id":"pair_979f082c87a54ad0bb0f9314aa72a8b0"}],"authentication":{},"metaSortKey":-1623062508992,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"fld_5fb9bda8312e4cbe8942c052a55020fb","parentId":"wrk_27c737a16de24768a653367c3ccd7fd9","modified":1623062169219,"created":1623062169219,"name":"User JSON","description":"","environment":{},"environmentPropertyOrder":null,"metaSortKey":-1623062169219,"_type":"request_group"},{"_id":"wrk_27c737a16de24768a653367c3ccd7fd9","parentId":null,"modified":1622819817348,"created":1622819817348,"name":"User Dictionary","description":"","scope":"collection","_type":"workspace"},{"_id":"req_8ddb44ccc57a46c4a1ff10cca53395ed","parentId":"fld_5fb9bda8312e4cbe8942c052a55020fb","modified":1623085852303,"created":1623062625549,"url":"{{ _.APP_URL }}/api/User/update/33?deleteNotExistingContacts=true","name":"Update User & Remove Not Existing Contact","description":"","method":"PUT","body":{"mimeType":"application/json","text":"{\n  \"firstName\": \"Kayli\",\n  \"surname\": \"Candida_Maggio\",\n  \"birthDate\": \"\",\n  \"location\": \"Officiis aspernatur et.\",\n  \"contactInformations\": [\n    {\n      \"id\": 94,\n      \"type\": 0,\n      \"name\": \"Cora Jerde\",\n      \"value\": \"Voluptatibus eligendi ut est error ut ab eos.\"\n    },\n    {\n      \"id\": 95,\n      \"type\": 0,\n      \"name\": \"Ivah Buckridge\",\n      \"value\": \"Vel repudiandae dolor rerum et odio porro illo vel voluptatem.\"\n    },\n    {\n      \"id\": 96,\n      \"type\": 0,\n      \"name\": \"Gladyce DuBuque\",\n      \"value\": \"Rem mollitia molestias.\"\n    },\n    {\n      \"type\": 2,\n      \"name\": \"2\",\n      \"value\": \"3\"\n    }\n  ]\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json","id":"pair_979f082c87a54ad0bb0f9314aa72a8b0"}],"authentication":{},"metaSortKey":-1623062341582,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_7ae3927ee55642fc8c1109b7acb5f2e3","parentId":"fld_5fb9bda8312e4cbe8942c052a55020fb","modified":1623063066195,"created":1623062174172,"url":"{{ _.APP_URL }}/api/User/add","name":"Add User","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n\t\"firstName\": \"a\",\n\t\"surname\": \"b\",\n\t\"photoFileName\": \"yok_b50e.jpg\",\n\t\"contactInformations\": [{\n\t\t\"type\": 0,\n\t\t\"name\": \"test\",\n\t\t\"value\": \"val\"\n\t}]\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json","id":"pair_5852fb49cd1a4a928b1ecc56d71b31ea"}],"authentication":{},"metaSortKey":-1623062174172,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_ec5fd25fca874cd094c627ed88b73a02","parentId":"fld_5fb9bda8312e4cbe8942c052a55020fb","modified":1623087457272,"created":1622969034217,"url":"{{ _.APP_URL }}/api/User/GetAllUsers","name":"Get All Users","description":"","method":"GET","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1623062174147,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_1a9f82c3edf34739b6b6998d8c26a772","parentId":"fld_5fb9bda8312e4cbe8942c052a55020fb","modified":1623087458379,"created":1622993394598,"url":"{{ _.APP_URL }}/api/User/GetAllUsers?loadContactInfo=true","name":"Get All Users Load Contact Info","description":"","method":"GET","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1623062174134.5,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_cdee3438b4f04ba0b12b1cbf576fa862","parentId":"fld_5fb9bda8312e4cbe8942c052a55020fb","modified":1623087461197,"created":1622970052725,"url":"{{ _.APP_URL }}/api/User/GetUser/33","name":"Get User","description":"","method":"GET","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1623062174128.25,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_fdd88f7705d94d67ae972dc2d676ede0","parentId":"fld_5fb9bda8312e4cbe8942c052a55020fb","modified":1623087452713,"created":1622968817893,"url":"{{ _.APP_URL }}/api/User/delete/1033","name":"Delete User","description":"","method":"DELETE","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1623062174122,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_e7df851625904fbfa55b6859d0a9516e","parentId":"fld_809f5557ee3c41aebaed050a1b324b93","modified":1623062124366,"created":1623062098926,"url":"{{ _.APP_URL }}/api/file/uploadimage","name":"Upload File","description":"","method":"POST","body":{"mimeType":"multipart/form-data","params":[{"name":"file","value":"","description":"","id":"pair_30331620159d41298603cdcc9df5a18b","type":"file","fileName":"C:\\Users\\furka\\Desktop\\yok.jpg"}]},"parameters":[],"headers":[{"name":"Content-Type","value":"multipart/form-data","id":"pair_5e31c461235f48e88cd0f23ed677c970"}],"authentication":{},"metaSortKey":-1623062098926,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"fld_809f5557ee3c41aebaed050a1b324b93","parentId":"wrk_27c737a16de24768a653367c3ccd7fd9","modified":1623062095309,"created":1623062095309,"name":"File","description":"","environment":{},"environmentPropertyOrder":null,"metaSortKey":-1623062095309,"_type":"request_group"},{"_id":"req_0053b18c7e064a25847510b27d9c37e5","parentId":"fld_2f98912e04014a579949175ccade3532","modified":1622972345791,"created":1622970606407,"url":"{{ _.APP_URL }}/api/contact/add","name":"Add Contact Information","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n\t\"type\": 3,\n\t\"value\": \"testtttttt\",\n\t\"userId\": 1032\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json","id":"pair_19ba2f9400e74d3fb8f5d231ca87ebba"}],"authentication":{},"metaSortKey":-1622970606407,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"fld_2f98912e04014a579949175ccade3532","parentId":"wrk_27c737a16de24768a653367c3ccd7fd9","modified":1622970599868,"created":1622970599868,"name":"Contact Informations","description":"","environment":{},"environmentPropertyOrder":null,"metaSortKey":-1622970599868,"_type":"request_group"},{"_id":"req_5e7556f703264681aee9a8095cffd5ed","parentId":"fld_2f98912e04014a579949175ccade3532","modified":1622972159941,"created":1622971463170,"url":"{{ _.APP_URL }}/api/contact/update/10","name":"Update Contact Information","description":"","method":"PUT","body":{"mimeType":"application/json","text":"{\n\t\"type\": 2,\n\t\"value\": \"ttttt\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json","id":"pair_19ba2f9400e74d3fb8f5d231ca87ebba"}],"authentication":{},"metaSortKey":-1622969712150,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_535f329b2057490598959200b3018fef","parentId":"fld_2f98912e04014a579949175ccade3532","modified":1622971620699,"created":1622971594710,"url":"{{ _.APP_URL }}/api/contact/delete/1","name":"Delete Contact Information","description":"","method":"DELETE","body":{},"parameters":[],"headers":[],"authentication":{},"metaSortKey":-1622969712100,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_160a2832738142dca371f11ddbfec5b9","parentId":"fld_0bb07bea684b443ca5dd2d7ac22b8930","modified":1623013873841,"created":1622825420168,"url":"{{ _.APP_URL }}/api/User/add","name":"Add User","description":"","method":"POST","body":{"mimeType":"multipart/form-data","params":[{"name":"FirstName","value":"a","description":"","id":"pair_f7e04ad86f1147d6877a3836c355e872"},{"name":"photo","value":"","description":"","id":"pair_188589e8d3a94bc8a18712cd9c5260c7","type":"file","fileName":"C:\\Users\\furka\\Desktop\\yok.jpg"},{"name":"Surname","value":"a","description":"","id":"pair_95c69ff7194f41f9899f79e2cccadc62","disabled":false},{"name":"BirthDate","value":"2019-07-01T04:00:00.000Z","description":"","id":"pair_146bfb992cb84505ac9352263fe0293f"},{"name":"ContactInformations[0].Type","value":"1","description":"","id":"pair_b78f230b9a69425b9a7d9ec57a042d05","disabled":false},{"name":"ContactInformations[0].Name","value":"test","description":"","id":"pair_c9f9ee78125442a78db7257a0f8b69fd","disabled":false},{"name":"ContactInformations[0].Value","value":"value","description":"","id":"pair_1aa6168dfe03478a9495544b2108666f","disabled":false}]},"parameters":[],"headers":[{"name":"Content-Type","value":"multipart/form-data","id":"pair_f610039556ef45e6a677213e537f4c0e"}],"authentication":{},"metaSortKey":-1622968817843,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"fld_0bb07bea684b443ca5dd2d7ac22b8930","parentId":"wrk_27c737a16de24768a653367c3ccd7fd9","modified":1623087449291,"created":1622970577464,"name":"User (OLD MULTIFORM)","description":"","environment":{},"environmentPropertyOrder":null,"metaSortKey":-1622970577464,"_type":"request_group"},{"_id":"req_c0ece8cdd2484e749221b2e8d5759bfe","parentId":"fld_0bb07bea684b443ca5dd2d7ac22b8930","modified":1622974568072,"created":1622974432231,"url":"{{ _.APP_URL }}/api/User/add","name":"Add User with Contact Information","description":"","method":"POST","body":{"mimeType":"multipart/form-data","params":[{"name":"FirstName","value":"testttttqwqwq","description":"","id":"pair_f7e04ad86f1147d6877a3836c355e872"},{"name":"photo","value":"","description":"","id":"pair_188589e8d3a94bc8a18712cd9c5260c7","type":"file","fileName":"C:\\Users\\furka\\Desktop\\yok.jpg"},{"name":"Surname","value":"asfasf","description":"","id":"pair_95c69ff7194f41f9899f79e2cccadc62"},{"name":"BirthDate","value":"2019-07-01T04:00:00.000Z","description":"","id":"pair_146bfb992cb84505ac9352263fe0293f"},{"name":"ContactInformations[0].Type","value":"0","description":"","id":"pair_f6e4fd668ee444158de083add638dbe6"},{"name":"ContactInformations[0].Value","value":"qqqqqqqq","description":"","id":"pair_b14f996275464091b79a4ae7a08cffdc"}]},"parameters":[],"headers":[{"name":"Content-Type","value":"multipart/form-data","id":"pair_f610039556ef45e6a677213e537f4c0e"}],"authentication":{},"metaSortKey":-1622968817818,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_e5bd9f6d30c1434887b839ce8060e399","parentId":"fld_0bb07bea684b443ca5dd2d7ac22b8930","modified":1623009998054,"created":1622967382432,"url":"{{ _.APP_URL }}/api/User/Update/10","name":"Update User","description":"","method":"PUT","body":{"mimeType":"multipart/form-data","params":[{"name":"FirstName","value":"testttttttttttttttttta","description":"","id":"pair_f7e04ad86f1147d6877a3836c355e872","disabled":false},{"name":"Surname","value":"asfasfgdgfd","description":"","id":"pair_95c69ff7194f41f9899f79e2cccadc62","disabled":false},{"name":"BirthDate","value":"1999-07-28T04:00:00.000Z","description":"","id":"pair_146bfb992cb84505ac9352263fe0293f"},{"name":"Location","value":"ab","description":"","id":"pair_8d48cc74f7314a4bbd59052065b8c32b"}]},"parameters":[],"headers":[{"name":"Content-Type","value":"multipart/form-data","id":"pair_f610039556ef45e6a677213e537f4c0e"}],"authentication":{},"metaSortKey":-1622968817768,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_a0ce069913644c7e8d283cc99395fb5a","parentId":"fld_0bb07bea684b443ca5dd2d7ac22b8930","modified":1622993078060,"created":1622974541249,"url":"{{ _.APP_URL }}/api/User/Update/1032","name":"Update User with Contact Information","description":"","method":"PUT","body":{"mimeType":"multipart/form-data","params":[{"name":"FirstName","value":"testttttttttttttttttta","description":"","id":"pair_f7e04ad86f1147d6877a3836c355e872"},{"name":"Surname","value":"asfasfgdgfd","description":"","id":"pair_95c69ff7194f41f9899f79e2cccadc62"},{"name":"BirthDate","value":"1999-07-28T04:00:00.000Z","description":"","id":"pair_146bfb992cb84505ac9352263fe0293f"},{"name":"Location","value":"a","description":"","id":"pair_8d48cc74f7314a4bbd59052065b8c32b"},{"name":"ContactInformations[0].Id","value":"1104","description":"","id":"pair_bffb756ed2ff435882c2cb3217fa86b8","disabled":true},{"name":"ContactInformations[0].Type","value":"2","description":"","id":"pair_cbe052dcda724f1f8ec13b919d6c3f7b","disabled":true},{"name":"ContactInformations[0].Value","value":"this will update ","description":"","id":"pair_c8ee40a544254b6aac8e0fdff97993bb","disabled":true},{"name":"ContactInformations[1].Id","value":"1105","description":"","id":"pair_523870d1928e49ec978b13de4c62b488","disabled":true},{"name":"ContactInformations[1].Type","value":"0","description":"","id":"pair_7416617b674c41e393aa86fe26c5ca45","disabled":true},{"name":"ContactInformations[1].Value","value":"this will also update ","description":"","id":"pair_f662b8a96d5c42bca3315e99a09a7c69","disabled":true},{"name":"ContactInformations[0].Type","value":"2","description":"","id":"pair_c3977e42088e4ba69a096758f26d7ed3","disabled":false},{"name":"ContactInformations[0].Value","value":"this will add a new contact info","description":"","id":"pair_323e1b2f3d9048b98b3e8b0aec71cb74","disabled":false},{"name":"ContactInformations[0].Name","value":"wwewewewewewhjhjh","description":"","id":"pair_2e8bc99f6c1b459280cc7557fc8b61ed"}]},"parameters":[],"headers":[{"name":"Content-Type","value":"multipart/form-data","id":"pair_f610039556ef45e6a677213e537f4c0e"}],"authentication":{},"metaSortKey":-1622968817755.5,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_c190f26283ab4449a88dcbe4e27b491e","parentId":"fld_0bb07bea684b443ca5dd2d7ac22b8930","modified":1622993201287,"created":1622989680192,"url":"{{ _.APP_URL }}/api/User/Update/1032?deleteNotExistingContacts=true","name":"Update User with Contact Information and Remove Not Existing Ones","description":"","method":"PUT","body":{"mimeType":"multipart/form-data","params":[{"name":"FirstName","value":"testttttttttttttttttta","description":"","id":"pair_f7e04ad86f1147d6877a3836c355e872"},{"name":"Surname","value":"asfasfgdgfd","description":"","id":"pair_95c69ff7194f41f9899f79e2cccadc62"},{"name":"BirthDate","value":"1999-07-28T04:00:00.000Z","description":"","id":"pair_146bfb992cb84505ac9352263fe0293f"},{"name":"Location","value":"a","description":"","id":"pair_8d48cc74f7314a4bbd59052065b8c32b"},{"name":"ContactInformations[0].Id","value":"1104","description":"","id":"pair_bffb756ed2ff435882c2cb3217fa86b8","disabled":false},{"name":"ContactInformations[0].Type","value":"2","description":"","id":"pair_cbe052dcda724f1f8ec13b919d6c3f7b","disabled":false},{"name":"ContactInformations[0].Name","value":"aaaa","description":"","id":"pair_895d208dd49a41d1b5b7d7ba5b10ff7c"},{"name":"ContactInformations[0].Value","value":"this will update ","description":"","id":"pair_c8ee40a544254b6aac8e0fdff97993bb","disabled":false},{"name":"ContactInformations[1].Id","value":"1105","description":"","id":"pair_523870d1928e49ec978b13de4c62b488","disabled":false},{"name":"ContactInformations[1].Type","value":"0","description":"","id":"pair_7416617b674c41e393aa86fe26c5ca45","disabled":false},{"name":"ContactInformations[1].Name","value":"fffffffffff","description":"","id":"pair_4a35980ae3784dc6ad6d5c35b3afd0c1"},{"name":"ContactInformations[1].Value","value":"this will also update ","description":"","id":"pair_f662b8a96d5c42bca3315e99a09a7c69","disabled":false},{"name":"ContactInformations[2].Type","value":"1","description":"","id":"pair_c3977e42088e4ba69a096758f26d7ed3","disabled":false},{"name":"ContactInformations[2].Value","value":"this will add a new contact info","description":"","id":"pair_323e1b2f3d9048b98b3e8b0aec71cb74","disabled":false},{"name":"ContactInformations[2].Name","value":"452452343243","description":"","id":"pair_34fa2bf5881942ab8b2b81de3199caf2"}]},"parameters":[],"headers":[{"name":"Content-Type","value":"multipart/form-data","id":"pair_f610039556ef45e6a677213e537f4c0e"}],"authentication":{},"metaSortKey":-1622968817749.25,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"env_9d2b8a85e99e13dac12165bc838662eccc525086","parentId":"wrk_27c737a16de24768a653367c3ccd7fd9","modified":1622819864544,"created":1622819817566,"name":"Base Environment","data":{"APP_URL":"https://localhost:44312"},"dataPropertyOrder":{"&":["APP_URL"]},"color":null,"isPrivate":false,"metaSortKey":1622819817566,"_type":"environment"},{"_id":"jar_9d2b8a85e99e13dac12165bc838662eccc525086","parentId":"wrk_27c737a16de24768a653367c3ccd7fd9","modified":1622819817568,"created":1622819817568,"name":"Default Jar","cookies":[],"_type":"cookie_jar"},{"_id":"spc_8afd12af83e14179839faa7ab62e7cf9","parentId":"wrk_27c737a16de24768a653367c3ccd7fd9","modified":1622819817350,"created":1622819817350,"fileName":"User Dictionary","contents":"","contentType":"yaml","_type":"api_spec"}]}
</pre></code>
</details>
