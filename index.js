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
      ]
    };
  }

  newline(args) {
    return args.ONE + '/n' + args.TWO;
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
      return 'Не удалось закодировать текст';
    }
  }

  print(args) {
    try {
      console.log(args.ONE);
    } catch (e) {
      alert('Не удалось напечатать ' + args.ONE + ' в консоль');
    }
  }
}

Scratch.extensions.register(new ToolBox());
