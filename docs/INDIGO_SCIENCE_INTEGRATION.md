# Nuclides → exotic atoms → quantum matter: integration contract

This fork is an educational nuclide explorer, **not** a validated nuclear-data authority. Keep the existing app intact and connect specialist Atlas layers through links and stable identifiers.

## Entity boundaries
- **Nuclide:** Z, N, A, isomer state, decay modes and half-life with evaluated-data provenance.
- **Hypernucleus:** nuclide-like baryonic system with hyperon content and distinct source/uncertainty fields.
- **Exotic atom:** electromagnetic bound system with nonstandard constituents (e.g., muonic hydrogen, positronium); not synonymous with a hypernucleus.
- **Quarkonium:** bound quark–antiquark system; not a conventional atom.
- **Quasiparticle:** emergent collective excitation in a specified material or medium; not an isolated elementary particle.
- **Phase / transition:** system, control variables, observable, order parameter and experimental conditions.

## Provenance schema (minimal)
```json
{"id":"atlas:nuclide:Z1-N1-ground","kind":"nuclide","source":{"url":"https://www.nndc.bnl.gov/","retrieved":"YYYY-MM-DD","dataset_version":null},"values":{},"uncertainty":{},"status":"needs-evaluated-data"}
```
The example is an identifier template, not a nuclear-data measurement. Keep measured facts, derived calculations and hypothetical states distinct.

## Release gates
1. Confirm existing app routes and data license before modifying rendering.
2. Establish evaluated nuclear-data source and version (NNDC/ENSDF or equivalent) and cite every numeric value.
3. Add read-only links to exotic atoms, hypernuclei, Standard Model and phase phenomena; avoid duplicate datasets.
4. Verify touch navigation, load time and clear unknown/unmeasured states on mobile.
5. Require specialist review before publishing newly inferred nuclear properties.
