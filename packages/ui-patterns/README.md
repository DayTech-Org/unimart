# Unimart UI Patterns

This package contains **reusable, composite UI patterns** built on top of the `@unimart/ui` atomic component library.

## What belongs here?

- **Complex Modules**: Components that combine multiple atoms (e.g., `SellerCard`, `HandshakeFlow`, `SafetyZoneCard`).
- **Domain-Specific Interfaces**: UI elements tailored to Unimart's specific workflows (e.g., Marketplace listings, Student Verification).
- **Standardized States**: Reusable templates for empty states, error boundaries, and loading skeletons.

## Key Principles

1.  **Composition over inheritance**: Build complex interfaces by combining simple atoms.
2.  **Consistency**: Ensure high-level patterns share the same visual language as the core design system.
3.  **Encapsulation**: Keep pattern-specific logic contained within the component.

## Usage

Import patterns directly from the package:

```tsx
import { HandshakeQR, EmptyState } from "@unimart/ui-patterns";
```
