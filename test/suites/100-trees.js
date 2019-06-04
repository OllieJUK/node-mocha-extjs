describe('Trees', function () {
    this.bail(true)
    this.timeout(20 * 1000)

    it('Switch to "Trees" tab', function (done) {
        eTT().tab('Trees').click(done)
    })

    it('Select the third node', function (done) {
        eTT().treePanel('Treepanel 1').select(2, done)
    })

    it('Select the first node', function (done) {
        eTT().treePanel('Treepanel 1').select(0, done)
    })

    it('Toggle the second node', function (done) {
        eTT().treePanel('Treepanel 1').toggle(1, done)
    })
})