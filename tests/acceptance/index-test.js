import { test } from 'qunit';
import moduleForAcceptance from 'debug-ember-template/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | /');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
