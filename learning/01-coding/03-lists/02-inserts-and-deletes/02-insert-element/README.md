# Insert Element at Position p

## Statement
Given a sequence with `n` integer elements, an integer value `X`, and a number `p`, insert the value `X` at position `p` in the sequence.

## Input
The program reads three values `n, X, p` from standard input, with the meaning described above, followed by `n` integers representing the elements of the sequence.

## Output
The program prints `n+1` integer values, separated by a space, representing the elements of the sequence after the insertion.

## Constraints
- `1 ≤ p ≤ n ≤ 25`
- The value `X` and the elements of the sequence will be between `-1,000,000` and `1,000,000`
- The elements of the sequence are indexed from `1` to `n`

## Example
**Input**
```
5 10 2
7 3 9 1 6
```

**Output**
```
7 10 3 9 1 6
```
