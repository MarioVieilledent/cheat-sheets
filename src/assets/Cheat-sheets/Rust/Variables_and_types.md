## Variables

### Rust supports type inference
```rust
let a = 12; // i32
let c = 30.5; // f64
let e = true; // bool
let f = 'A'; // char
```

### Keywords
- `const` for constant, `UPPERCASE`
- `let` for immutable variable, `snake_case`
- `let mut` for mutable variable, `snake_case`

```rust
let d = 123; // Decimal
let h = 0x7b; // Hexadecimal
let o = 0o173; // Octal
let b = 0b0100101; // Binary

let d = 5_732_458_562; // Separator

// Suffixes
let c = 42_u8; // u8: 42
let f = 35.5_f32; // f32: 35.5

// Conversion
dbg!(3.14 as u8);
dbg!(65 as char);
dbg!(false as u16);

// Unused variables with _ prefix
let _b = 47; // Issue ignored at compilation
```

## Types

```rust
// Integers
i8 // 8 bits
i16 // 16 bits
i32 // 32 bits
i64 // 64 bits
i128 // 128 bits
isize // 32 or 64 depending on architecture

// Unsigned integers
u8 // 8 bits
u16 // 16 bits
u32 // 32 bits
u64 // 64 bits
u128 // 128 bits
usize // 32 or 64 depending on architecture

// Floats
f32 // IEEE754
f64 // IEEE754

// Booleans
bool // true or false

// Character
char // Unicode single character
```