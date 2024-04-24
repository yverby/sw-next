import { createEdges, createNodes, createTree } from '../flow';

describe('@/lib/flow', () => {
  const data = { foo: [{ bar: [{}] }] };

  describe('createTree', () => {
    it('should create the tree of nodes', () => {
      expect(createTree(data, 'root', ['foo', 'bar'])).toEqual(
        expect.objectContaining({
          id: expect.stringContaining('root-'),
          type: 'root',
          children: expect.arrayContaining([
            expect.objectContaining({
              id: expect.stringContaining('foo-'),
              type: 'foo',
              children: expect.arrayContaining([
                expect.objectContaining({
                  id: expect.stringContaining('bar-'),
                  type: 'bar',
                }),
              ]),
            }),
          ]),
        })
      );
    });
  });

  describe('createNodes', () => {
    it('should create the flat array of nodes from the tree node', () => {
      expect(createNodes(createTree(data, 'root', ['foo', 'bar']))).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.stringContaining('root-'),
            type: 'root',
          }),
          expect.objectContaining({
            id: expect.stringContaining('foo-'),
            type: 'foo',
          }),
          expect.objectContaining({
            id: expect.stringContaining('bar-'),
            type: 'bar',
          }),
        ])
      );
    });
  });

  describe('createEdges', () => {
    it('should create the flat array of edges from the tree node', () => {
      expect(createEdges(createTree(data, 'root', ['foo', 'bar']))).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            source: expect.stringContaining('root-'),
            target: expect.stringContaining('foo-'),
          }),
          expect.objectContaining({
            source: expect.stringContaining('foo-'),
            target: expect.stringContaining('bar-'),
          }),
        ])
      );
    });
  });
});
