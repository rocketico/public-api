define({ "api": [
  {
    "type": "get",
    "url": "/domains",
    "title": "Get list of domains",
    "name": "GetDomains",
    "description": "<p>Used to get list of domains.</p>",
    "group": "Domain",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "projects",
            "description": "<p>Array of domains</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"title\": \"First\",\n  \"description\": \"\",\n  \"createdAt\": \"2017-03-02T19:31:27.000Z\",\n  \"updatedAt\": \"2017-03-02T19:31:27.000Z\"\n}, {\n  \"id\": 2,\n  \"title\": \"Second\",\n  \"description\": \"description\",\n  \"createdAt\": \"2017-03-02T19:31:27.000Z\",\n  \"updatedAt\": \"2017-03-02T19:31:27.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/domains.js",
    "groupTitle": "Domain"
  },
  {
    "type": "delete",
    "url": "/file/:id",
    "title": "Delete File by ID",
    "name": "DeleteFile",
    "description": "<p>Used to delete file.</p>",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>File id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>File not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FILE_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/file.js",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/file/:id/download",
    "title": "Download File by ID",
    "name": "DownloadFile",
    "description": "<p>Used to download file.</p>",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>File id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>File not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FILE_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/file.js",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/file/:id",
    "title": "Get file data by ID",
    "name": "GetById",
    "description": "<p>Used to get file data.</p>",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>File id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>File ID value</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>File original name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>File hash</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mimetype",
            "description": "<p>File mimetype</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>File size in bytes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"id\": 1,\n      \"userId\": 1,\n      \"name\": \"148032718818614088.jpg\",\n      \"hash\": \"a11509f61438479a05b5d6ce95f2cae4\",\n      \"mimetype\": \"image/jpeg\",\n      \"size\": 1245234\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>File not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FILE_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/file.js",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/file",
    "title": "Upload file",
    "name": "UploadFile",
    "description": "<p>Used to upload files.</p>",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>File to upload</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>File ID value</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>File original name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>File hash</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mimetype",
            "description": "<p>File mimetype</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>File size in bytes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"id\": 1,\n     \"name\": \"image.jpeg\",\n     \"userId\": 1,\n     \"hash\": \"bb27a368d79eff5654ba9834b878178d\",\n     \"mimetype\": \"image/jpeg\",\n     \"size\": 1245234\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Incoming file not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FILE_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/file.js",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/users/auth",
    "title": "Authenticate user",
    "name": "AuthUser",
    "description": "<p>Used to authenticate user account by email and password.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Account email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password for account</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJkYW5pZWwubGF6ZGluQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkRhbmllbCIsImxhc3ROYW1lIjoiTGF6ZGluIiwicGhvbmUiOiIxMjMxMjMxMjMiLCJhY3RpdmUiOjEsImNyZWF0ZWRBdCI6IjIwMTctMDMtMDRUMTk6MTE6MzcuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMTctMDMtMDRUMTk6MTE6MzcuMDAwWiIsImlhdCI6MTQ4ODk4NTUxNSwiZXhwIjoxNDg5MDAzNTE1fQ.k6NncCuV8BRkhOskK3VaIWG8InFH5UORI5hLriA3P8E\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Invalid email or password</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"INVALID_CREDENTIALS\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:id/change-password",
    "title": "Change user password",
    "name": "ChangeUserPassword",
    "description": "<p>Used to change user password.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New user password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"password\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"USER_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id/clear-reset-password-token",
    "title": "Clear reset password token",
    "name": "ClearResetPasswordToken",
    "description": "<p>Used to clear reset password token.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"USER_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "User Registration",
    "name": "CreateUser",
    "description": "<p>Used to create user account.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Account email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Account first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Account last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Account password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"test@test.com\",\n    \"password\": \"password\",\n    \"firstName\": \"John\",\n    \"lastName\": \"Dow\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "dob",
            "description": "<p>Date of birth.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "logoFileId",
            "description": "<p>Logo file id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isAgreedTerms",
            "description": "<p>Is agreed to terms &amp; conditions?</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isAgreedPromotions",
            "description": "<p>Is agreed to receive promotions?</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isNewUser",
            "description": "<p>Is new user (first log in)?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>2 letter language code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>User's website link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>User's position.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skype",
            "description": "<p>User's skype contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Is user active.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "loggedInAt",
            "description": "<p>Date of last log in.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"id\": 1,\n  \"email\": \"test@test.com\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Dow\",\n  \"phone\": \"123123123\",\n  \"dob\": \"1980-01-01\",\n  \"logoFileId\": 1,\n  \"isAgreedTerms\": false,\n  \"isAgreedPromotions\": false,\n  \"link\": \"google.com\",\n  \"position\": \"dev\",\n  \"skype\": \"skypeLogin\",\n  \"phone\":\"1234\",\n  \"isNewUser\": false,\n  \"lang\": \"en\",\n  \"loggedInAt\": \"2017-03-02T19:31:27.000Z\",\n  \"createdAt\": \"2017-03-02T19:31:27.000Z\",\n  \"updatedAt\": \"2017-03-02T19:31:27.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>E-mail already exists</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"EMAIL_EXISTS\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete user",
    "name": "DeleteUser",
    "description": "<p>Used to delete user account.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"USER_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id/generate-reset-password-token",
    "title": "Generate reset password token",
    "name": "GenerateResetPasswordToken",
    "description": "<p>Used to generate reset password token.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"token\": \"f7f6c3db7a37e11fce77137a93d92ccc4013a9a4\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"USER_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get user",
    "name": "GetUser",
    "description": "<p>Used to get user account by ID.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "dob",
            "description": "<p>Date of birth.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "logoFileId",
            "description": "<p>Logo file id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isAgreedTerms",
            "description": "<p>Is agreed to terms &amp; conditions?</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isAgreedPromotions",
            "description": "<p>Is agreed to receive promotions?</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isNewUser",
            "description": "<p>Is new user (first log in)?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>2 letter language code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>User's website link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>User's position.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skype",
            "description": "<p>User's skype contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Is user active.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "loggedInAt",
            "description": "<p>Date of last log in.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"email\": \"test@test.com\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Dow\",\n  \"phone\": \"123123123\",\n  \"dob\": \"1980-01-01\",\n  \"logoFileId\": 1,\n  \"isAgreedTerms\": false,\n  \"isAgreedPromotions\": false,\n  \"isNewUser\": false,\n  \"link\": \"google.com\",\n  \"position\": \"dev\",\n  \"skype\": \"skypeLogin\",\n  \"phone\":\"1234\",\n  \"lang\": \"en\",\n  \"active\": true,\n  \"loggedInAt\": \"2017-03-02T19:31:27.000Z\",\n  \"createdAt\": \"2017-03-02T19:31:27.000Z\",\n  \"updatedAt\": \"2017-03-02T19:31:27.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User id not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"USER_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/auth",
    "title": "Get user object by authentication token",
    "name": "GetUserAuth",
    "description": "<p>Used to get user object by authentication token.</p>",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token bearer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "dob",
            "description": "<p>Date of birth.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>User's website link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>User's position.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skype",
            "description": "<p>User's skype contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "logoFileId",
            "description": "<p>Logo file id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isAgreedTerms",
            "description": "<p>Is agreed to terms &amp; conditions?</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isAgreedPromotions",
            "description": "<p>Is agreed to receive promotions?</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isNewUser",
            "description": "<p>Is new user (first log in)?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>2 letter language code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Is user active.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "loggedInAt",
            "description": "<p>Date of last log in.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"email\": \"test@test.com\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Dow\",\n  \"phone\": \"123123123\",\n  \"dob\": \"1980-01-01\",\n  \"link\": \"google.com\",\n  \"position\": \"dev\",\n  \"skype\": \"skypeLogin\",\n  \"phone\":\"1234\",\n  \"logoFileId\": 1,\n  \"isAgreedTerms\": false,\n  \"isAgreedPromotions\": false,\n  \"isNewUser\": false,\n  \"lang\": \"en\",\n  \"loggedInAt\": \"2017-03-02T19:31:27.000Z\",\n  \"createdAt\": \"2017-03-02T19:31:27.000Z\",\n  \"updatedAt\": \"2017-03-02T19:31:27.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Invalid bearer signature</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"INVALID_SIGNATURE\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get users",
    "name": "GetUsers",
    "description": "<p>Used to get users.</p>",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "users",
            "description": "<p>Array of users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"email\": \"test@test.com\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Dow\",\n  \"phone\": \"123123123\",\n  \"dob\": \"1980-01-01\",\n  \"logoFileId\": 1,\n  \"link\": \"google.com\",\n  \"position\": \"dev\",\n  \"skype\": \"skypeLogin\",\n  \"phone\":\"1234\",\n  \"isAgreedTerms\": false,\n  \"isAgreedPromotions\": false,\n  \"isNewUser\": false,\n  \"lang\": \"en\",\n  \"active\": true,\n  \"loggedInAt\": \"2017-03-02T19:31:27.000Z\",\n  \"createdAt\": \"2017-03-02T19:31:27.000Z\",\n  \"updatedAt\": \"2017-03-02T19:31:27.000Z\"\n}, {\n  \"id\": 2,\n  \"email\": \"test2@test.com\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Dow\",\n  \"phone\": \"123123123\",\n  \"dob\": \"1980-01-01\",\n  \"isAgreedTerms\": false,\n  \"isAgreedPromotions\": false,\n  \"isNewUser\": false,\n  \"lang\": \"en\",\n  \"link\": \"google.com\",\n  \"position\": \"dev\",\n  \"skype\": \"skypeLogin\",\n  \"phone\":\"1234\",\n  \"active\": true,\n  \"loggedInAt\": \"2017-03-02T19:31:27.000Z\",\n  \"createdAt\": \"2017-03-02T19:31:27.000Z\",\n  \"updatedAt\": \"2017-03-02T19:31:27.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/reset-password/:token",
    "title": "Reset password",
    "name": "ResetPassword",
    "description": "<p>Used to reset password.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Reset password token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenNotFound",
            "description": "<p>Token not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Token expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"USER_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"TOKEN_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"RESET_PASSWORD_TOKEN_EXPIRED\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update user",
    "name": "UpdateUser",
    "description": "<p>Used to update user account.</p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Account email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": "<p>Account first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": "<p>Account last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Account phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dob",
            "description": "<p>Date of birth.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isAgreedTerms",
            "description": "<p>Is agreed to terms &amp; conditions?</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isAgreedPromotions",
            "description": "<p>Is agreed to receive promotions?</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "description": "<p>2 letter language code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>User's website link.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>User's position.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skype",
            "description": "<p>User's skype contact.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "description": "<p>Is account active.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "loggedInAt",
            "description": "<p>Date of last log in.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"test@test.com\",\n    \"firstName\": \"John\",\n    \"lastName\": \"Dow\",\n    \"phone\": \"123123123\",\n    \"lang\": \"en\"\n    \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>User's website link.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>User's position.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "skype",
            "description": "<p>User's skype contact.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "dob",
            "description": "<p>Date of birth.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "logoFileId",
            "description": "<p>Logo file id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isAgreedTerms",
            "description": "<p>Is agreed to terms &amp; conditions?</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isAgreedPromotions",
            "description": "<p>Is agreed to receive promotions?</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isNewUser",
            "description": "<p>Is new user (first log in)?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>2 letter language code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Is user active.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "loggedInAt",
            "description": "<p>Date of last log in.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"email\": \"test@test.com\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Dow\",\n  \"phone\": \"123123123\",\n  \"dob\": \"1980-01-01\",\n  \"logoFileId\": 1,\n  \"isAgreedTerms\": false,\n  \"isAgreedPromotions\": false,\n  \"link\": \"google.com\",\n  \"position\": \"dev\",\n  \"skype\": \"skypeLogin\",\n  \"phone\":\"1234\",\n  \"isNewUser\": false,\n  \"lang\": \"en\",\n  \"loggedInAt\": \"2017-03-02T19:31:27.000Z\",\n  \"createdAt\": \"2017-03-02T19:31:27.000Z\",\n  \"updatedAt\": \"2017-03-02T19:31:27.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"USER_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/:id/documents",
    "title": "Create user document",
    "name": "CreateDocument",
    "description": "<p>Used to create user account.</p>",
    "group": "User_Documents",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fileId",
            "description": "<p>File id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userId\": 1,\n    \"fileId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Document id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "fileId",
            "description": "<p>File id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"userId\": 1,\n  \"fileId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/user-documents.js",
    "groupTitle": "User_Documents"
  },
  {
    "type": "delete",
    "url": "/:id/documents/:docId",
    "title": "Delete user document",
    "name": "DeleteDocument",
    "description": "<p>Used to delete document.</p>",
    "group": "User_Documents",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "docId",
            "description": "<p>Document id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Document not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"DOCUMENT_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/user-documents.js",
    "groupTitle": "User_Documents"
  },
  {
    "type": "get",
    "url": "/users/:id/documents/:docId",
    "title": "Get user document",
    "name": "GetUserDocument",
    "description": "<p>Used to get user document by ID.</p>",
    "group": "User_Documents",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "docId",
            "description": "<p>Document id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Document id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "fileId",
            "description": "<p>File id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"userId\": 1,\n  \"fileId\": 1,\n  \"createdAt\": \"2017-03-02T19:31:27.000Z\",\n  \"updatedAt\": \"2017-03-02T19:31:27.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Document id not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"DOCUMENT_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/user-documents.js",
    "groupTitle": "User_Documents"
  },
  {
    "type": "get",
    "url": "/users/:id/documents",
    "title": "Get all user documents",
    "name": "GetUserDocuments",
    "description": "<p>Used to get all user's documents.</p>",
    "group": "User_Documents",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "users",
            "description": "<p>Array of documents</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"userId\": 1,\n  \"fileId\": 1,\n  \"description\": \"test\",\n  \"createdAt\": \"2017-03-02T19:31:27.000Z\",\n  \"updatedAt\": \"2017-03-02T19:31:27.000Z\"\n}, {\n  \"id\": 2,\n  \"userId\": 1,\n  \"fileId\": 2,\n  \"description\": \"test\",\n  \"createdAt\": \"2017-03-02T19:31:27.000Z\",\n  \"updatedAt\": \"2017-03-02T19:31:27.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/user-documents.js",
    "groupTitle": "User_Documents"
  },
  {
    "type": "put",
    "url": "/:id/documents/:docId",
    "title": "Update user document",
    "name": "UpdateDocument",
    "description": "<p>Used to update document.</p>",
    "group": "User_Documents",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "userId",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "fileId",
            "description": "<p>File id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userId\": 1,\n    \"fileId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Document id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "fileId",
            "description": "<p>File id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"userId\": 1,\n  \"fileId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Document not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"DOCUMENT_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/user-documents.js",
    "groupTitle": "User_Documents"
  },
  {
    "type": "post",
    "url": "/projects",
    "title": "Create project",
    "name": "CreateProject",
    "description": "<p>Used to create new project.</p>",
    "group": "project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Project title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Project description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "domains",
            "description": "<p>Project domains.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"test@test.com\",\n    \"password\": \"password\",\n    \"firstName\": \"John\",\n    \"lastName\": \"Dow\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>project id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>project title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>project description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "domains",
            "description": "<p>Array of project domains.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"id\": 1,\n  \"domains\": [1,2,3],\n  \"logoFileId\": 1,\n  \"title\": \"Title\",\n  \"description\": \"description\"\n  \"loggedInAt\": \"2017-03-02T19:31:27.000Z\",\n  \"createdAt\": \"2017-03-02T19:31:27.000Z\",\n  \"updatedAt\": \"2017-03-02T19:31:27.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Title already exists</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"TITLE_EXISTS\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/projects.js",
    "groupTitle": "project"
  },
  {
    "type": "delete",
    "url": "/projects/:id",
    "title": "Delete project",
    "name": "DeleteProject",
    "description": "<p>Used to delete project.</p>",
    "group": "project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>project id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>project not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"PROJECT_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/projects.js",
    "groupTitle": "project"
  },
  {
    "type": "get",
    "url": "/projects/:id",
    "title": "Get project",
    "name": "GetProject",
    "description": "<p>Used to get project by ID.</p>",
    "group": "project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>project id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>project id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>project title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>project description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "domains",
            "description": "<p>Array of project domains.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"domains\": [1,2,3],\n  \"logoFileId\": 1,\n  \"title\": \"Title\",\n  \"description\": \"description\"\n  \"loggedInAt\": \"2017-03-02T19:31:27.000Z\",\n  \"createdAt\": \"2017-03-02T19:31:27.000Z\",\n  \"updatedAt\": \"2017-03-02T19:31:27.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>project id not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"project_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/projects.js",
    "groupTitle": "project"
  },
  {
    "type": "get",
    "url": "/projects",
    "title": "Get projects",
    "name": "GetProjects",
    "description": "<p>Used to get projects.</p>",
    "group": "project",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "projects",
            "description": "<p>Array of projects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"domains\": [1,2,3],\n  \"logoFileId\": 1,\n  \"title\": \"Title\",\n  \"description\": \"description\"\n  \"loggedInAt\": \"2017-03-02T19:31:27.000Z\",\n  \"createdAt\": \"2017-03-02T19:31:27.000Z\",\n  \"updatedAt\": \"2017-03-02T19:31:27.000Z\"\n}, {\n  \"id\": 2,\n  \"domains\": [1,2,3],\n  \"logoFileId\": 1,\n  \"title\": \"Title\",\n  \"description\": \"description\"\n  \"loggedInAt\": \"2017-03-02T19:31:27.000Z\",\n  \"createdAt\": \"2017-03-02T19:31:27.000Z\",\n  \"updatedAt\": \"2017-03-02T19:31:27.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/projects.js",
    "groupTitle": "project"
  },
  {
    "type": "put",
    "url": "/projects/:id",
    "title": "Update project",
    "name": "Updateproject",
    "description": "<p>Used to update project account.</p>",
    "group": "project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>project id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>project title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>project description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "domains",
            "description": "<p>Array of project domains.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"test@test.com\",\n    \"firstName\": \"John\",\n    \"lastName\": \"Dow\",\n    \"phone\": \"123123123\",\n    \"lang\": \"en\"\n    \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>project id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>project title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>project description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "domains",
            "description": "<p>Array of project domains.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"domains\": [1,2,3],\n  \"logoFileId\": 1,\n  \"title\": \"Title\",\n  \"description\": \"description\"\n  \"loggedInAt\": \"2017-03-02T19:31:27.000Z\",\n  \"createdAt\": \"2017-03-02T19:31:27.000Z\",\n  \"updatedAt\": \"2017-03-02T19:31:27.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>project not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>Server or database error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"PROJECT_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"SERVER_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/projects.js",
    "groupTitle": "project"
  }
] });
