class ToolBox {
  getInfo() {
    return {
      id: 'toolboxtm',
      name: 'Расширенные возможности',
      color1: '#E8E8E8',

      blocks: [
        {
          opcode: "newline",
          blockType: Scratch.BlockType.REPORTER,
          text: '[ONE] новая строчка [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
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
        '---',
        {
          opcode: 'print',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Распечатать в консоль [ONE]',

          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'notification',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Уведомить [ONE]',

          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
      ]
    };
  }

  newline(args) {
    try {
      return args.ONE + '\n' + args.TWO;
    } catch (e) {
      return 'Не удалось разбить тексты по строкам';
    }
  }

  encode(args) {
    try {
      return btoa(encodeURIComponent(args.ONE));
    } catch (e) {
      return 'Не удалось закодировать текст';
    }
  }

  decode(args) {
    try {
      return atob(decodeURIComponent(args.ONE));
    } catch (e) {
      return 'Не удалось раскодировать текст';
    }
  }

  print(args) {
    try {
      console.log(args.ONE);
    } catch (e) {
      console.log('Не удалось напечатать ' + args.ONE + ' в консоль');
    }
  }

  notification(args) {
    try {
      alert(args.ONE);
    } catch (e) {
      console.log('Не удалось уведомить пользователя');
    }
  }
}

Scratch.extensions.register(new ToolBox());
