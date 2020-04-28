initSidebarItems({"enum":[["CacheError","Kinds of caching errors"],["CallError","This error type is produced by calling a wasm function exported from a module."],["CompileError","This is returned when the chosen compiler is unable to successfully compile the provided WebAssembly module into a `Module`."],["CreationError","This error type is produced when creating something, like a `Memory` or a `Table`."],["Error","The amalgamation of all errors that can occur during the compilation, instantiation, or execution of a WebAssembly module."],["GrowError","An error occurred while growing a memory or table."],["InvokeError","An error that happened while invoking a Wasm function."],["LinkError","This is returned when the runtime is unable to correctly link the module with the provided imports."],["MemoryCreationError","Error occured while creating memory."],["MemoryProtectionError","Error protecting memory."],["PageError","A kind of page error."],["ParseError","Parse Error."],["ResolveError","This error type is produced by resolving a wasm function given its name."],["RuntimeError","An `InternalError` is an error that happened inside of Wasmer and is a catch-all for errors that would otherwise be returned as `RuntimeError(Box::new(<string>))`."]],"type":[["CallResult","Result of an attempt to call the provided WebAssembly instance. Aliases the standard `Result` with `CallError` as the default error type."],["CompileResult","Result of an attempt to compile the provided WebAssembly module into a `Module`. Aliases the standard `Result` with `CompileError` as the default error type."],["LinkResult","Result of an attempt to link the provided WebAssembly instance. Aliases the standard `Result` with `Vec<LinkError>` as the default error type."],["ParseResult","Result of an attempt to parse bytes into a WebAssembly module. Aliases the standard `Result` with `ParseError` as the default error type."],["ResolveResult","Result of an attempt to resolve a WebAssembly function by name. Aliases the standard `Result` with `ResolveError` as the default error type."],["Result","Aliases the standard `Result` type as `Result` within this module."],["RuntimeResult","Result of an attempt to run the provided WebAssembly instance. Aliases the standard `Result` with `RuntimeError` as the default error type."]]});