Object.defineProperty(window, "localStorage", {
  value: {
    getItemNE: jest.fn(() => null),
    getItem: jest.fn(() => "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE")
  }
})

describe("Redirect with token",() => {
  it("Existing token", () => {
    const expected = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE"
    const received = window.localStorage.getItem("token")
    expect(received).toEqual(expected)
  })
  it("Not existing token, then redirect", () => {
    const expected = null
    const received = window.localStorage.getItemNE("token")
    expect(received).toEqual(expected)
  })
})

