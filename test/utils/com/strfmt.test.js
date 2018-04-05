import chai from 'chai';
const expect = chai.expect;

import UT from '../../../lib/utils/util';

const data = {
  info: {
    level: 'inf', errno: 0, subject: 'IO', 
    prompt: 'Do %s know %s and %s', 
    args: ['You', 'China', 'Germany']
  },
  err:  {
    level: 'err', errno: 404, subject: 'Search',
    prompt: 'Do %s know %s and %s',
    args: ['You', 'China', 'Germany']
  }
};

/**
 * @name tsprintf
 */
describe('tsprintf', function() {
  it('tsprintf', () => {
    UT.debugPrint(UT.tsprintf(data.info));
    UT.debugPrint(UT.tsprintf(data.err));
  });
  it('tsprintf2', () => {
    UT.debugPrint(UT.tsprintf2('Have %s %s %s', '1-A', '2-NICE', '3-DAY'));
  });
  it('tsprintf3', () => {
    UT.debugPrint(UT.tsprintf3('dbg', 'What %s %s think?', '1-DO', '2-YOU'));
  });
  it('tsprintf4', () => {
    UT.debugPrint(UT.tsprintf4('Open', 'Trc', 'I know %s %s is %d years old.', '1-He', '2-Is', 32));
  });
  it('tsprintf5', () => {
    let di = data.info;
    UT.debugPrint(UT.tsprintf5(di.errno, di.subject, di.level, di.prompt, '1-We', '2-MacOS', '3-Linux'));
  });
});

/**
 * @name jtsprintf
 */
describe('jsprintf', function() {
  it('jtsprintf', () => {
    UT.debugPrint(UT.jtsprintf(data.info));
    UT.debugPrintObj(UT.jtsprintf(data.err));
  });
  it('jtsprintf2', () => {
    UT.debugPrintObj(UT.jtsprintf2('Have %s %s %s', '1-A', '2-NICE', '3-DAY'));
  });
  it('jtsprintf3', () => {
    UT.debugPrintObj(UT.jtsprintf3('Err', 'What %s %s think?', '1-DO', '2-YOU'));
  });
  it('jtsprintf4', () => {
    UT.debugPrintObj(UT.jtsprintf4('Open', 'Crt', 'I know %s %s is %d years old.', '1-He', '2-Is', 32));
  });
  it('jtsprintf5', () => {
    let di = data.info;
    UT.debugPrintObj(UT.jtsprintf5(di.errno, di.subject, di.level, di.prompt, '1-We', '2-MacOS', '3-Linux'));
  });
});
