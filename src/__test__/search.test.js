describe("Search Hero", () => {
  it("Empty search", () => {
    const received = ""
    const expected = ""
    expect(received).toEqual(expected)
  })
  it("Received text", () => {
    const received = "bat"
    expect(received.length).toBeGreaterThan(2)
  })
})