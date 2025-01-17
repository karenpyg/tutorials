use clap::Parser; 


#[derive(Parser)]
struct Cli{
    pattern: String,
    path: std::path::PathBuf,
}

fn main() {
    // The parse method is meant to be used in your main function. 
    // Don’t use it in other places!
    let args = Cli::parse(); 

    let result = std::fs::read_to_string("test.txt"); 
    let content = match result {
        Ok(content) => {println!("file content: {}", content); }
        Err(error) => { panic!("Cant deal with {}", error); }
    }

    let result = std::fs::read_to_string(&args.path).expect("could not read file");
    for line in content.lines() {
        if line.contains(&args.pattern) {
            println!("{}", line); 
        }
    }

    println!("pattern: {:?}, path: {:?}", args.pattern, args.path)
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let result = std::fs::read_to_string("test.txt"); 
    let content = match result {
        Ok(content) => { content}, 
        Err(error) => {return Err(error.into()); }
    }; 
    println!("file content: {}", content); 
    ok(()) 
    /* Note: Why is this not written as return Ok(());? It easily could be – 
    this is totally valid as well. The last expression of any block in Rust 
    is its return value, and it is customary to omit needless returns. */
}