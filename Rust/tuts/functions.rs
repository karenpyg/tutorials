fn greeting() -> &'static str{
    "i am ready to learn this shit"
}

fn test_welcome(){
    assert_eq!(greeting(), "i am ready to learn this shit");
}

fn greet(name: &str) -> String{
    format!("hello, there {}", name)
}

// TODO: fix the function signature below to make the tests pass.
//  Make sure to read the compiler error message—the Rust compiler is your pair programming
//  partner in this course and it'll often guide you in the right direction!
//
// The input parameters should have the same type of the return type.
fn compute(a, b) -> u32 {
    // Don't touch the function body.
    a + b * 2
}

#[cfg(test)]
mod tests {
    use crate::compute;

    #[test]
    fn case() {
        assert_eq!(compute(1, 2), 5);
    }
}