describe('Layouts', function () {
    this.bail(true)
    this.timeout(20 * 1000)

    it('Switch to "Layouts" tab', function (done) {
        eTT().tab('Layouts').click(done)
    })

    it('Expand accordion panel', function (done) {
        eTT().panel('Accordion 2').click().waitText('Accordion text is here!', done)
    })
})

