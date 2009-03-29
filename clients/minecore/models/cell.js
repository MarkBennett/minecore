// ==========================================================================
// Minecore.Cell
// ==========================================================================

require('core');

/** @class

  This represents a single cell on the map of a minefield.

  @extends SC.Record
  @author MarkBennett
  @version 0.1
*/
Minecore.Cell = SC.Record.extend(
/** @scope Minecore.Cell.prototype */ {

  properties: ['hasMine','isRevealed','isFlagged',],

  isExploded: function() {
    // Has this cell been revealed?
    if (YES == this.get('isRevealed')) {
      // Only cells with mines will explode
      if (this.get('hasMine')) {
        return YES;
      }
    }
    return NO;
  }.property('isRevealed'),

  isSolved: function() {
    // Is this cell a mine?
    if (this.get('hasMine')) {
      // Yes, it's a mine
      // Has it been flagged
      if (YES == this.get('isFlagged')) {
        if (NO == this.get('isRevealed')) {
          return YES;
        }
      }
    }
    else {
      // Has this cell been revealed to be empty?
      if (YES == this.get('isRevealed')) {
        return YES;
      }
    }

    // Otherwise always return false
    return NO;
  }.property('hasMine','isFlagged','isRevealed'),

}) ;
