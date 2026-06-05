class ToolBox {
  getInfo() {
    return {
      id: 'toolboxtm',
      name: 'Расширенные возможности',

      blocks: [
        {
          opcode: 'join',
          blockType: Scratch.BlockType.REPORTER,
          text: 'объединить текст [ONE] и [TWO]',

          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            },
            TWO: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'encode',
          blockType: Scratch.BlockType.REPORTER,
          text: 'закодировать текст [ONE] в Base64',

          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'decode',
          blockType: Scratch.BlockType.REPORTER,
          text: 'раскодировать текст [ONE] из Base64',

          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'getPagetext',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Возполучить весь текст с сайта [ONE]',

          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
      ]
    };
  }

  join(args) {
    try {
      const theResult = args.ONE + args.TWO;
      return theResult;
    } catch (e) {
      return 'Не удалось объединить текст';
    }
  }

  encode(args) {
    try {
      const theResult = btoa(encodeURIComponent(args.ONE));
      return theResult;
    } catch (e) {
      return 'Не удалось закодировать текст';
    }
  }

  decode(args) {
    try {
      const theResult = atob(decodeURIComponent(args.ONE));
      return theResult;
    } catch (e) {
      return 'Не удалось раскодировать текст';
    }
  }

  getPagetext(args) {
    const url = args.ONE;

  // Возвращаем промис — Scratch умеет работать с промисами в расширениях
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(text => {
      // Успешный результат — текст страницы
      return text;
    })
    .catch(error => {
      // Обработка любых ошибок
      console.error('Ошибка при получении данных:', error);
      return 'Ошибка загрузки: ' + error.message;
    });
  }
}

Scratch.extensions.register(new ToolBox());
