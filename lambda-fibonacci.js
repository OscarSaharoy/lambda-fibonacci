
// function that prints true for K and false for KI
printBool  = x => console.log( x(true)(false) )

// function that prints the value of a church numeral
printChurchNumeral = x => console.log( x(y => ++y)(0) )

// function to print pairs of church numerals
printPair = p => console.log( `(${fst(p)(y => ++y)(0)}, ${snd(p)(y => ++y)(0)})` )


// bird functions
I  = x => x                 // ibis
M  = f => f(f)              // mockingbird
C  = f => x => y => f(y)(x) // cardinal
B  = f => g => x => f(g(x)) // bluebird
TH = f => g => g(f)         // thrush
BL = B(B)(B)                // blackbird


// K and KI are functions representing true and false respectively
K  = x => y => x
KI = x => y => y

// define logical functions to take K or KI and return K or KI
not = x => x(KI)(K)
and = x => y => x(y)(x) 
or  = x => y => x(x)(y)
beq = x => y => x( y )( not(y) )

// pair
P   = a => b => f => f(a)(b)
fst = p => p(K)
snd = p => p(KI)

// phi combinator
phi = p => P( snd(p) )( succ(snd(p)) )

// peano arithmetic with church numerals
zero  = f  => x => x
one   = f  => x => f(x)
two   = f  => x => f(f(x))
three = f  => x => f(f(f(x)))

// successor and predecessor functions
succ  = n  => f  => B(f)(n(f))
pred  = n  => fst( n( phi )( P(zero)(zero) ) )

add   = n1 => n2 => n1(succ)(n2)
sub   = n1 => n2 => n2(pred)(n1)
mul   = n1 => n2 => B(n1)(n2)    // == B
pow   = n1 => n2 => n2(n1)       // == TH

five  = add(two)(three)
ten   = mul(five)(two)

// number comparisons
is0   = n  => n(K(KI))(K)
leq   = n1 => n2 => is0( sub(n2)(n1) )
eq    = n1 => n2 => and( leq(n1)(n2) )( leq(n2)(n1) )
gt    = BL(not)(leq)

// fibonacci combinator
fib   = p => P( snd(p) )( add(fst(p))(snd(p)) )

// push to a stack
push = x => s => P(s)(x)

printChurchNumeral( snd( ten(fib)( P(one)(one) ) ) )