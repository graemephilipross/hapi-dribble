'use strict';

const Code = require('code');
const Lab = require('lab');

const filter = require('../lib/index3');

const expect = Code.expect;
const lab = Lab.script();
const describe = lab.describe;
const it = lab.it;

describe('proceesKeep', () => {

  it('should', (done) => {
    const res = filter.processKeep(['a.b.c', 'g'], {
      a: {
        b: {
          c: 'c',
          d: 'd'
        },
        e: 'e'
      },
      g: 'g'
    });

    expect(res).to.equal({
      a: {
        b: {
          c: 'c'
        }
      },
      g: 'g'
    });
    done();
  });

  it('should', (done) => {
    const res = filter.processKeep(['a.b.c', 'g'], {
      a: [{
        b: {
          c: 'c',
          d: 'd'
        },
        e: 'e'
      }],
      g: 'g'
    });

    expect(res).to.equal({
      a: [{
        b: {
          c: 'c'
        }
      }],
      g: 'g'
    });
    done();
  });

  // it('should', (done) => {
  //   const res = filter.processKeep(['a.b.c'], {
  //     a: [[{ b: 'b' }]]
  //   });

  //   expect(res).to.equal({
  //     a: [{
  //       b: {
  //         c: 'c'
  //       }
  //     }],
  //     g: 'g'
  //   });
  //   done();
  // });

  it('should', (done) => {
    const res = filter.processKeep(['a.b'], {
      a: [{
        b: {
          c: 'c',
          d: 'd'
        },
        e: 'e'
      }],
      g: 'g'
    });

    expect(res).to.equal({
      a: [{
        b: {
          c: 'c',
          d: 'd'
        }
      }]
    });
    done();
  });

  it('should', (done) => {
    const res = filter.processKeep(['a.b'], {
      a: [{
        b: [{
          c: 'c',
          d: 'd'
        }],
        e: 'e'
      }],
      g: 'g'
    });

    expect(res).to.equal({
      a: [{
        b: [{
          c: 'c',
          d: 'd'
        }]
      }]
    });
    done();
  });

  it('should', (done) => {
    const res = filter.processKeep(['a.b', 'h'], [{
      h: 'h',
      a: [{
        b: [{
          c: 'c',
          d: 'd'
        }],
        e: 'e'
      }],
      g: 'g'
    }]);

    expect(res).to.equal([{
      h: 'h',
      a: [{
        b: [{
          c: 'c',
          d: 'd'
        }]
      }]
    }]);
    done();
  });

});
