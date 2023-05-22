const {palindrome} = require ('../utils/for_testing')

test('palindrome of midudev', () => {
    const result = palindrome('max')

    expect(result).toBe('xam')
});

test('palindorme of empty string', () => {
    //const result = palindrome()
    const result = palindrome('')

    expect(result).toBe('')
})

test('palindrome of undefined', () => {
   const result = palindrome()

   expect(result).toBeUndefined()
})