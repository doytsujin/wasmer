(function() {var implementors = {};
implementors["wasmer"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"wasmer/sys/value/enum.Value.html\" title=\"enum wasmer::sys::value::Value\">Value</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.i32.html\">i32</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"wasmer/sys/value/enum.Value.html\" title=\"enum wasmer::sys::value::Value\">Value</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u32.html\">u32</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"wasmer/sys/value/enum.Value.html\" title=\"enum wasmer::sys::value::Value\">Value</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.i64.html\">i64</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"wasmer/sys/value/enum.Value.html\" title=\"enum wasmer::sys::value::Value\">Value</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u64.html\">u64</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"wasmer/sys/value/enum.Value.html\" title=\"enum wasmer::sys::value::Value\">Value</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.f32.html\">f32</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"wasmer/sys/value/enum.Value.html\" title=\"enum wasmer::sys::value::Value\">Value</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.f64.html\">f64</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"wasmer/sys/value/enum.Value.html\" title=\"enum wasmer::sys::value::Value\">Value</a>&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/1.63.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"wasmer/sys/externals/function/struct.Function.html\" title=\"struct wasmer::sys::externals::function::Function\">Function</a>&gt;","synthetic":false,"types":["core::option::Option"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"wasmer/sys/value/enum.Value.html\" title=\"enum wasmer::sys::value::Value\">Value</a>&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/1.63.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"wasmer/sys/extern_ref/struct.ExternRef.html\" title=\"struct wasmer::sys::extern_ref::ExternRef\">ExternRef</a>&gt;","synthetic":false,"types":["core::option::Option"]}];
implementors["wasmer_c_api"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'static <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/types/struct.wasm_externtype_t.html\" title=\"struct wasmer_c_api::wasm_c_api::types::wasm_externtype_t\">wasm_externtype_t</a>&gt; for &amp;'static <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/types/struct.wasm_functype_t.html\" title=\"struct wasmer_c_api::wasm_c_api::types::wasm_functype_t\">wasm_functype_t</a>","synthetic":false,"types":["wasmer_c_api::wasm_c_api::types::function::wasm_functype_t"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'static <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/types/struct.wasm_externtype_t.html\" title=\"struct wasmer_c_api::wasm_c_api::types::wasm_externtype_t\">wasm_externtype_t</a>&gt; for &amp;'static <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/types/struct.wasm_globaltype_t.html\" title=\"struct wasmer_c_api::wasm_c_api::types::wasm_globaltype_t\">wasm_globaltype_t</a>","synthetic":false,"types":["wasmer_c_api::wasm_c_api::types::global::wasm_globaltype_t"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'static <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/types/struct.wasm_externtype_t.html\" title=\"struct wasmer_c_api::wasm_c_api::types::wasm_externtype_t\">wasm_externtype_t</a>&gt; for &amp;'static <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/types/struct.wasm_tabletype_t.html\" title=\"struct wasmer_c_api::wasm_c_api::types::wasm_tabletype_t\">wasm_tabletype_t</a>","synthetic":false,"types":["wasmer_c_api::wasm_c_api::types::table::wasm_tabletype_t"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'static <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/types/struct.wasm_externtype_t.html\" title=\"struct wasmer_c_api::wasm_c_api::types::wasm_externtype_t\">wasm_externtype_t</a>&gt; for &amp;'static <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/types/struct.wasm_memorytype_t.html\" title=\"struct wasmer_c_api::wasm_c_api::types::wasm_memorytype_t\">wasm_memorytype_t</a>","synthetic":false,"types":["wasmer_c_api::wasm_c_api::types::memory::wasm_memorytype_t"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u8.html\">u8</a>&gt; for <a class=\"enum\" href=\"wasmer_c_api/wasm_c_api/types/enum.wasm_mutability_enum.html\" title=\"enum wasmer_c_api::wasm_c_api::types::wasm_mutability_enum\">wasm_mutability_enum</a>","synthetic":false,"types":["wasmer_c_api::wasm_c_api::types::mutability::wasm_mutability_enum"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u8.html\">u8</a>&gt; for <a class=\"enum\" href=\"wasmer_c_api/wasm_c_api/types/enum.wasm_valkind_enum.html\" title=\"enum wasmer_c_api::wasm_c_api::types::wasm_valkind_enum\">wasm_valkind_enum</a>","synthetic":false,"types":["wasmer_c_api::wasm_c_api::types::value::wasm_valkind_enum"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/value/struct.wasm_val_t.html\" title=\"struct wasmer_c_api::wasm_c_api::value::wasm_val_t\">wasm_val_t</a>&gt; for <a class=\"enum\" href=\"wasmer/sys/value/enum.Value.html\" title=\"enum wasmer::sys::value::Value\">Value</a>","synthetic":false,"types":["wasmer::sys::value::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;<a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/value/struct.wasm_val_t.html\" title=\"struct wasmer_c_api::wasm_c_api::value::wasm_val_t\">wasm_val_t</a>&gt; for <a class=\"enum\" href=\"wasmer/sys/value/enum.Value.html\" title=\"enum wasmer::sys::value::Value\">Value</a>","synthetic":false,"types":["wasmer::sys::value::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"wasmer/sys/value/enum.Value.html\" title=\"enum wasmer::sys::value::Value\">Value</a>&gt; for <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/value/struct.wasm_val_t.html\" title=\"struct wasmer_c_api::wasm_c_api::value::wasm_val_t\">wasm_val_t</a>","synthetic":false,"types":["wasmer_c_api::wasm_c_api::value::wasm_val_t"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;<a class=\"enum\" href=\"wasmer/sys/value/enum.Value.html\" title=\"enum wasmer::sys::value::Value\">Value</a>&gt; for <a class=\"struct\" href=\"wasmer_c_api/wasm_c_api/value/struct.wasm_val_t.html\" title=\"struct wasmer_c_api::wasm_c_api::value::wasm_val_t\">wasm_val_t</a>","synthetic":false,"types":["wasmer_c_api::wasm_c_api::value::wasm_val_t"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"wasmer_c_api/wasm_c_api/wasi/enum.wasi_version_t.html\" title=\"enum wasmer_c_api::wasm_c_api::wasi::wasi_version_t\">wasi_version_t</a>&gt; for <a class=\"enum\" href=\"wasmer_wasi/utils/enum.WasiVersion.html\" title=\"enum wasmer_wasi::utils::WasiVersion\">WasiVersion</a>","synthetic":false,"types":["wasmer_wasi::utils::WasiVersion"]}];
implementors["wasmer_types"] = [{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/convert/trait.TryFrom.html\" title=\"trait wasmer_types::lib::std::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"wasmer_types/units/struct.Bytes.html\" title=\"struct wasmer_types::units::Bytes\">Bytes</a>&gt; for <a class=\"struct\" href=\"wasmer_types/units/struct.Pages.html\" title=\"struct wasmer_types::units::Pages\">Pages</a>","synthetic":false,"types":["wasmer_types::units::Pages"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()